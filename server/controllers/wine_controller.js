module.exports = {
    getWines: (req, res) => {
        const dbInstance = req.app.get('db');
        return dbInstance.get_all_wines()
            .then(wines => {
                res.status(200).json({ wines: wines });
            })
            .catch(err => console.log(err));
    },
    createWineEntry: (req, res) => {
        const dbInstance = req.app.get('db');
        
        const { wine, vintage, gws, ci, nbj, country_id, entry_status_id } = req.body;
        console.log("REQ.BODY:",req.body);
        return dbInstance.create_wine_entry({ wine, vintage, gws, ci, nbj, country_id, entry_status_id })
            .then(createdWineEntry => {
                res.status(201).json({success: true}); //Success is not required, return a 201 status code indicating a record has been created.
            })
            .catch(err => console.log(err));
    },
    updateWineEntry: (req, res) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        const { wine, vintage, gws, ci, nbj, country_id, entry_status_id } = req.body;
        
        /*
            ** Success is not required, return a 204 status code indicating a record has been updated, therefore return no content. 
            ***** DELETE THIS COOMMENT *********
            ** Instead refresh the screen with updated data.
            ** In a professional situation you would refresh a grid, or refresh the modal with updated data.
        */
        return dbInstance.update_wine_entry({ id, wine, vintage, gws, ci, nbj, country_id, entry_status_id })
            .then(updatedWineEntry => {
                res.status(204).json({success: true}); 
            })
            .catch(err => console.log(err));
    },
    deleteWineEntry: (req, res) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;

        /*
            ** Success is not required, return a 204 status code indicating a record has been deleted, therefore return no content. 
        */
        return dbInstance.delete_wine_entry({ id })
            .then(deletedWineEntry => {
                res.status(204).json({success: true}); 
            })
            .catch(err => console.log(err));
    }
};