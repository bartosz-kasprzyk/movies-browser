export const toMovie = ({ id } = { id: ":id" }) => `/movie/${id}`;
export const toPerson = ({ id } = { id: ":id" }) => `/person/${id}`;

export const toMovies = () => "/movies";
export const toPeople = () => "/people";