import { useState } from "react";

class Tag{
    static Id = 0;
    constructor(nombre){  
        //Incrementa el Id para que cada uno sea unico :D
        Tag.Id++;
        this.Id = Tag.Id;
        this.nombre = nombre;
    }
}

const tagsDefault =[
     //Hay que agregarle Id
    new Tag("Llegue tarde a un parcial"),
    new Tag("Llegue tarde a un final") ,
    new Tag("Llegue tarde a un quiz"),
    new Tag("Llegue tarde a clase"),
    new Tag("Entregue un proyecto tarde"),
    new Tag("No hice un proyecto"),
    new Tag("No hice a tiempo mi parte de un trabajo"),
    new Tag("Llegue tarde al trabajo"),
    new Tag("No fui a una reunion")
];



function createTag(tags, tag){
    // Revisemos que la tag no exista
    const existe = tags.some((tagExistente) => tagExistente.nombre.toLowerCase() === tag.trim().toLowerCase());

    if(tag && tag.trim() !=="" && !existe){
        //Hay que hacer tipo un constructor de tag para asignarle Id tambien
        const nuevoTag = new Tag(tag.trim());
        return [...tags, nuevoTag];
    } 
    else{
        return tags;
    }
}
