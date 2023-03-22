
const indexController = {
    index: (req,res) => {
        res.render("index")
    },

    equipo: (req,res) => {
        res.render("equipo-de-trabajo")
    }
}

module.exports = indexController;
