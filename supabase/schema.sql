create table if not exists public.profiles (
    id uuid primary key references auth.users (id) on delete cascade,
    full_name text,
    audience text not null default 'learner'
        check (audience in ('learner', 'school', 'data', 'software', 'partner')),
    created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "Users can read their own profile" on public.profiles;
create policy "Users can read their own profile"
    on public.profiles
    for select
    to authenticated
    using ((select auth.uid()) = id);

revoke all on public.profiles from anon, authenticated, public;
grant select on public.profiles to authenticated;

create or replace function public.create_profile_for_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
    insert into public.profiles (id, full_name, audience)
    values (
        new.id,
        nullif(trim(new.raw_user_meta_data ->> 'full_name'), ''),
        case coalesce(
            new.raw_user_meta_data ->> 'audience',
            new.raw_user_meta_data ->> 'requested_role'
        )
            when 'learner' then 'learner'
            when 'student' then 'learner'
            when 'school' then 'school'
            when 'educator' then 'school'
            when 'data' then 'data'
            when 'software' then 'software'
            when 'client' then 'software'
            when 'partner' then 'partner'
            else 'learner'
        end
    )
    on conflict (id) do nothing;

    return new;
end;
$$;

drop trigger if exists create_profile_after_signup on auth.users;
create trigger create_profile_after_signup
    after insert on auth.users
    for each row execute function public.create_profile_for_new_user();

insert into public.profiles (id, full_name, audience)
select
    users.id,
    nullif(trim(users.raw_user_meta_data ->> 'full_name'), ''),
    case coalesce(
        users.raw_user_meta_data ->> 'audience',
        users.raw_user_meta_data ->> 'requested_role'
    )
        when 'learner' then 'learner'
        when 'student' then 'learner'
        when 'school' then 'school'
        when 'educator' then 'school'
        when 'data' then 'data'
        when 'software' then 'software'
        when 'client' then 'software'
        when 'partner' then 'partner'
        else 'learner'
    end
from auth.users as users
on conflict (id) do nothing;