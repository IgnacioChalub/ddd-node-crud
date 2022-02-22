class Link{

    private id: string;
    private title: string;
    private description: string;
    private url: string;
    private updatedAt: Date;
    private createdAt: Date;


    private constructor(id: string, title: string, description: string, url: string, updatedAt: Date, createdAt: Date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
        this.updatedAt = updatedAt;
        this.createdAt = createdAt;
    }

    static create(id: string, title: string, description: string, url: string): Link{
        const date: Date = new Date();
        return new Link(id, title, description, url, date, date);
    }
}

export default Link;