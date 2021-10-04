--- DELETE THIS COMMENT --
-- In professional settings you would need at least a query like this when dealing with millions of records.
-- select * from wine_scores skip 0 limit 100;
select *, ( select name from lk_countries lc where lc.id = wine_scores.country_id ) as country from wine_scores; 