
export default interface TopicComment{
    id: string;
    user: string,
    content: string,
    typeUser: 'Autor' | 'Coautor' | ''
}