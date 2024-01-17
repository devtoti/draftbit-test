export type ReviewCardProps = {
    key?: number
    name: string,
    img: string,
    jobPos: string,
    review: string,
    rating: {
        support: number,
        recommended: number,
        overall: number,
    }
}

export type RCardListProps = {
    cards: ReviewCardProps[]
}