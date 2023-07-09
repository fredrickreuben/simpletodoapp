export interface ITodo {
    id: string,
    title: string,
    completed: boolean,
    date: string
}

export interface IError {
    message: string,
    isError: boolean
}