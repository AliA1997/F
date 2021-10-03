UPDATE wine_entries
SET wine = ${wine}, vintage = ${vintage}, gws = ${gws}, ci = ${ci}, nbj = ${nbj}, country_id = ${country_id}, entry_status_id = ${entry_status_id}
WHERE id = ${id};