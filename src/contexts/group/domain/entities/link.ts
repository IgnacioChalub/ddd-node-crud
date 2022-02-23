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

    static create(id: string, title: string, description: string, url: string, updatedAt: Date, createdAt: Date): Link{
        return new Link(id, title, description, url, updatedAt, createdAt);
    }

    public getId(): string{
        return this.id;
    }

    public getTitle(): string{
        return this.title;
    }

    public getDescription(): string{
        return this.description;
    }

    public getUrl(): string{
        return this.url;
    }

    public getUpdatedAt(): Date{
        return this.updatedAt;
    }

    public getCreatedAt(): Date{
        return this.createdAt;
    }

}

export default Link;