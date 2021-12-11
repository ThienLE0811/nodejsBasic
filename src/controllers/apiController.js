import pool from '../configs/connectDB'

let getAllUser = (req, res) => {
    return res.status(200).json({
        message: 'ok ok !!!'
    })
}

let createNewUser = async (req, res) => {
    let {firstName, lastName, email, address} = req.body;
    if(!firstName || !lastName || !email || !address ){
        return res.status(200).json({
            message: 'missing required params !!!'
        })
    }

    await pool.execute('insert into user(firstName, lastName, email, address) values(?,?,?,?)',
    [firstName, lastName, email, address])
    
    
    return res.status(200).json({
        message: 'create-user !!!'
    })
}

let updateUser = async (req, res) => {
    let {firstName, lastName, email, address, id} = req.body;
    if(!firstName || !lastName || !email || !address || !id){
        return res.status(200).json({
            message: 'missing required params !!!'
        })
    }

    await pool.execute('update user set firstName= ?, lastName= ?, email= ?, address= ? where id = ?',
    [firstName, lastName, email, address, id])

    return res.status(200).json({
        message: 'update-user !!!'
    })

}

let deleteUser = async (req, res) => {
    let userId = req.params.id;
    if(!userId){
        return res.status(200).json({
            message: 'missing required params !!!'
        })
    }

    await pool.execute('delete from user where id = ?', [userId]);
    return res.status(200).json({
        message: 'delete-user !!!'
    })
}


module.exports = {
    getAllUser,createNewUser,updateUser,deleteUser
}