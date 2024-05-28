/**
 * Write the logic to create the controllers for the idea resources
 */
const ideas = require('../models/ideas.model')

let id = 3 //Initial count of id

/**
 * Create the controller for fetching all the ideas
 * 
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas
 * 
 * Return list of all ideas
 */


exports.getAllIdeas = (req,res) => {
    
    // First read all the ideas from the idea model file

    //Return all those ideas
    res.status(200).send(ideas)

}

/**
 * Controller that fetches idea based on the id\
 * 
 * GET 127.0.0.1:800/ideaApp/api/v1/ideas/2
 */

exports.getIdeaBasedOnId = (req,res) => {
    
    //We need to first read idea id from the req path param
    idea_id = req.params.id;

    //Using id, check if the idea with that is present
    //If present return the id
    if(ideas[idea_id]){
        res.status(200).send(ideas[idea_id])
    }
    else{
        res.status(404).send({
            message : "Idea with the given idea id not found"
        })
    }
    
}

/**
 * Controller to create a new idea
 */

exports.createIdea = (req,res) =>{


    //I need to read the request body
    idea_object = req.body

    console.log(idea_object)
    id++
    idea_object["id"] = id //setting the id in the new created idea object
    ideas[id] = idea_object // putting the new id in the data 

    //Add the new object provided in the ideas object

    //Return the response
    res.status(201).send(idea_object)
}

/**
 * Controller to update a idea
 */

exports.updateIdea = (req,res) =>{
    //Read the idea id
    idea_id = req.params.id

    //Check is that idea id is present
    if(ideas[idea_id]){
        //Read the new idea body and replace it
        idea_object = req.body
        ideas[idea_id] = idea_object
        //Return the updated idea
        res.status(200).send(idea_object)
    }
    else{
        res.status(404).send({
            message : "Idea id you want to update doesn't exist"
        })
    }
    
}

/**
 * Controller to delete some idea
 */

exports.deleteIdea = (req,res) => {
    //Fetch the idea
    idea_id = req.params.id

    //Check is idea is present
    if(ideas[idea_id]){
        //Delete this idea with help of id
        delete ideas[idea_id]
        res.status(200).send({
            message : "Yaay your idea is succesfully deleted"
        })
    }else{
        res.status(404).send({
            message : "idea id you wanted to delete is already not present boss !!"
        })
    }
}