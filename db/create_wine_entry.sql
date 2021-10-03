insert into wine_entry
(
    wine,
    vintage,
    gws,
    ci,
    nbj,
    country_id,
    entry_status_id,
     'Needs Expert Approval' -- This is meaningless. All wine entries when approved will not require expert approval, but display it to not con usersl
)
values
( ${wine}, ${vintage}, ${gws}, ${ci}, ${nbj}, ${country_id}, ${entry_status_id}, 'Needs Expert Approval');