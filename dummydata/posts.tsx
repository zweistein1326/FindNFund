export interface Post {
    header: PostHeader,
    info: PostInfo,
    stats: PostStats,
}

export interface PostHeader {
    sender_id: string,
    timestamp: number,
}


export interface PostInfo {
    text: string,
    assets: object[],
}


export interface PostStats {
    likes: number,
    comments: number,
}

export const posts: Post[] = [
    {
        header: {
            sender_id: '1',
            timestamp: 1674650553000
        },
        info: {
            text: 'We are raising funds for sponsoring 3 bright students who have showed high caliber in the fields of science and technology. Read More',
            assets: [{uri:"https://github.com/zweistein1326/FindNFund/blob/main/public/images/africa_children.png?raw=true"}],
        },
        stats: {
            likes: 90,
            comments: 202,
        }
    },
    {
        header: {
            sender_id: '2',
            timestamp: 1674650553000
        },
        info: {
            text: 'At our Library cum Creativity Centres children get a space to indulge themselves in beautifully illustrated story books Read More',
            assets: [{uri: "https://github.com/zweistein1326/FindNFund/blob/main/public/images/africa_children_2.png?raw=true"}],
        },
        stats: {
            likes: 90,
            comments: 202,
        }
    },
    {
        header: {
            sender_id: '2',
            timestamp: 1674650553000
        },
        info: {
            text: 'At our Library cum Creativity Centres children get a space to indulge themselves in beautifully illustrated story books Read More',
            assets: [{uri: "https://github.com/zweistein1326/FindNFund/blob/main/public/images/africa_children_2.png?raw=true"}],
        },
        stats: {
            likes: 90,
            comments: 202,
        }
    },{
        header: {
            sender_id: '2',
            timestamp: 1674650553000
        },
        info: {
            text: 'At our Library cum Creativity Centres children get a space to indulge themselves in beautifully illustrated story books Read More',
            assets: [{uri: "https://github.com/zweistein1326/FindNFund/blob/main/public/images/africa_children_2.png?raw=true"}],
        },
        stats: {
            likes: 90,
            comments: 202,
        }
    },{
        header: {
            sender_id: '2',
            timestamp: 1674650553000
        },
        info: {
            text: 'At our Library cum Creativity Centres children get a space to indulge themselves in beautifully illustrated story books Read More',
            assets: [{uri: "https://github.com/zweistein1326/FindNFund/blob/main/public/images/africa_children_2.png?raw=true"}],
        },
        stats: {
            likes: 90,
            comments: 202,
        }
    },
];