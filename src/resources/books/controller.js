const { prisma } = require("../../utils/database");

const getAll = async (req, res) => {
    try {
        const getAll = await prisma.book.findMany();
    // console.log(getAll)
    res.json({ data: getAll })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    } 
}

const getOneById = async (req,res) =>{
    const idReq = req.params.id;
    try {
        const getById = await prisma.book.findUnique({
        where:{
            id: parseInt(idReq),
        },
    })
    res.json({  data: getById })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message});
    }
}

const getOneByType = (req,res) =>{
    const typeR = req.params.type;

    const getByType = prisma.book.findMany({
        where: {
            type: "fiction",
        },
    })

    res.json({ data: getByType })
}

module.exports = {
    getAll,
    getOneById,
    getOneByType
};