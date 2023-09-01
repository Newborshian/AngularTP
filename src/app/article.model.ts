export class Article {
    id: string;
    title: string;
    link: string;
    votes: number;
    constructor(id: string ,title: string, link: string, votes?: number){
        this.id = id;
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
voteUp(): void{
    this.votes++;
}

voteDown(): void{
    this.votes--
}

}
