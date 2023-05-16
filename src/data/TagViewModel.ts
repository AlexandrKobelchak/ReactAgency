import {Guid} from "guid-typescript";
import {ClientTagsComponent} from "../components/client-tags/client-tags-component";
import React from "react";


export class TagViewModel {

    constructor(
        public id: Guid,
        public tagName: string,
        public isChecked: boolean)
    {
    }
}

export  class ClientTagService{

    public clientTags: TagViewModel[];

    constructor() {

        this.clientTags = [
                new TagViewModel( Guid.create(), "VIP", true),
                new TagViewModel( Guid.create(),"Горнолыжный отдых", false),
                new TagViewModel( Guid.create(),"Постоянный клиент", true),
                new TagViewModel( Guid.create(), "Эконом", true),
                new TagViewModel( Guid.create(),"Активный отдых", false),
                new TagViewModel( Guid.create(),"Ездит один", false),
                new TagViewModel( Guid.create(),"Семья", true),
                new TagViewModel( Guid.create(),"Экскурсионный отдых", false),
        ];
    }
}