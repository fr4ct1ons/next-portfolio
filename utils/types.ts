interface CategoryEntry
{
    path?: string;
    imgPath?: string;
    webmPath?: string;
}

interface ContentfulGalleryFields
{
    media: ContentfulGalleryItem[]
    title: string
}

interface ContentfulGalleryItem
{
    fields: ContentfulFields
}

interface ContentfulFields
{
    description: string | undefined;
    title: string;
    file: ContentfulFile;
}

interface ContentfulFile
{
    contentType: string;
    url: string;
}