export interface Book {
  error?: string,
  total?: string,
  page?: string,
  books?: [{
    title?: string,
    subtitle?: string,
    isbn13?: string,
    price?: string,
    image?: string
}]
}
