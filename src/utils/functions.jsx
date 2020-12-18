import metadata from '../abis/_metadata.json'

export const list = [
    {
        text: 'Background',
        attributes: [{
            text: 'Abstract_Geometric',
            amount: 15
        },
        {
            text: 'Abstract_Paint',
            amount: 17
        },
        {
            text: 'Glowing_Particles',
            amount: 13
        },
        {
            text: 'Neon_Bubbles',
            amount: 19
        },
        {
            text: 'Neon_Circles',
            amount: 8
        },
        {
            text: 'Neon_Galaxy',
            amount: 11
        },
        {
            text: 'Neon_Lines',
            amount: 17
        }]
    },
    {
        text: 'Body',
        attributes: [{
            text: 'Dark_Gray',
            amount: 13
        },
        {
            text: 'Light_Gray',
            amount: 4
        },
        {
            text: 'Light_Yellow',
            amount: 11
        },
        {
            text: 'Peach',
            amount: 15
        },
        {
            text: 'Pink',
            amount: 17
        },
        {
            text: 'Purple',
            amount: 19
        },
        {
            text: 'Yellow',
            amount: 21
        }]

    },
    {
        text: 'Eyes',
        attributes: [
            {
                text: 'Dark_Brown',
                amount: 20
            },
            {
                text: 'Grey_Tired',
                amount: 16
            },
            {
                text: 'Light_Brown',
                amount: 12
            },
            {
                text: 'No_Eyelids',
                amount: 14
            },
            {
                text: 'One_Semiclosed',
                amount: 18
            },
            {
                text: 'Tiny',
                amount: 4
            },
            {
                text: 'Wide',
                amount: 16
            }
        ]
    },
    {
        text: 'Eyebrows',
        attributes: [
            {
                text: 'Cream',
                amount: 29
            },
            {
                text: 'Gray',
                amount: 20
            },
            {
                text: 'Peach',
                amount: 9
            },
            {
                text: 'Pink',
                amount: 14
            },
            {
                text: 'White',
                amount: 26
            },
            {
                text: 'White_Purple',
                amount: 3
            },
        ]
    },
    {
        text: 'Front Paw',
        attributes: [
            {
                text: 'Band',
                amount: 15
            },
            {
                text: 'Bangle',
                amount: 14
            },
            {
                text: 'Empty',
                amount: 23
            },
            {
                text: 'Gold_Watch',
                amount: 12
            },
            {
                text: 'Ring',
                amount: 6
            },
            {
                text: 'Small_Ring',
                amount: 3
            },
            {
                text: 'Socks',
                amount: 14
            },
            {
                text: 'Watch',
                amount: 12
            },
        ]
    },
    {
        text: 'Back Paw Right',
        attributes: [
            {
                text: 'Blue',
                amount: 13
            },
            {
                text: 'Boot',
                amount: 17
            },
            {
                text: 'Empty',
                amount: 31
            },
            {
                text: 'Rubber_Red',
                amount: 19
            },
            {
                text: 'White',
                amount: 21
            }
        ]
    },
    {
        text: 'Pants',
        attributes: [
            {
                text: 'Empty',
                amount: 69
            },
            {
                text: 'Jogger',
                amount: 14
            },
            {
                text: 'Leather',
                amount: 17
            }
        ]
    },
    {
        text: 'Clothes',
        attributes: [
            {
                text: 'Black_Jacket',
                amount: 12
            },
            {
                text: 'Blue_Jacket',
                amount: 13
            },
            {
                text: 'Blue_Suit',
                amount: 9
            },
            {
                text: 'Brown_Sweater',
                amount: 15
            },
            {
                text: 'Empty',
                amount: 15
            },
            {
                text: 'Red_Coat',
                amount: 7
            },
            {
                text: 'Skirt',
                amount: 13
            },
            {
                text: 'Sports_Jacket',
                amount: 15
            }
        ]
    },
    {
        text: 'Back Paw Left',
        attributes: [
            {
                text: 'Blue',
                amount: 13
            },
            {
                text: 'Boot',
                amount: 17
            },
            {
                text: 'Empty',
                amount: 31
            },
            {
                text: 'Rubber_Red',
                amount: 19
            },
            {
                text: 'White',
                amount: 21
            }
        ]
    },
    {
        text: 'Mouth Wear',
        attributes: [],
    },
    {
        text: 'Head Wear',
        attributes: [
            {
                text: 'Blue_Shades',
                amount: 14
            },
            {
                text: 'Crown',
                amount: 10
            },
            {
                text: 'Earring',
                amount: 16
            },
            {
                text: 'Eth_Cap',
                amount: 18
            },
            {
                text: 'Firefighter',
                amount: 16
            },
            {
                text: 'Race_Helmet',
                amount: 20
            },
            {
                text: 'Yellow_Hair',
                amount: 6
            }
        ]
    },
    {
        text: 'Neck Wear',
        attributes: [
            {
                text: 'Empty',
                amount: 31
            },
            {
                text: 'Eth_Gold',
                amount: 21
            },
            {
                text: 'Eth_Locket',
                amount: 19
            },
            {
                text: 'Gold_Chain',
                amount: 13
            },
            {
                text: 'Headphones',
                amount: 17
            }
        ]
    }
]
export const getTotalScore = (id) => {
    let score = 0;
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < list[i].attributes.length; j++)
            if (metadata[id].attributes[i].value === list[i].attributes[j].text) {
                score += list[i].attributes[j].amount;
            }
    }
    return score;
}

export const getScore = (id, index) => {
    for (let i = 0; i < list[index].attributes.length; i++)
        if (metadata[id].attributes[index].value === list[index].attributes[i].text)
            return list[index].attributes[i].amount;
    return 0;
}

export const getCountScore = (ids, _i, _j) => {
    let c = 0;
    for (let i = 0; i < ids.length; i++)
        if (metadata[ids[i]].attributes[_i].value === list[_i].attributes[_j].text)
            c++;
    return c;
}

export const filterScore = (ids, checked) => {
    console.log("DDDD");
    let temp = [];
    for (let i = 0; i < ids.length; i++) {
        for (let j = 0; j < list.length; j++)
            for (let k = 0; k < list[j].attributes.length; k++)
                if (metadata[ids[i]].attributes[j].value === list[j].attributes[k].text && checked[j][k])
                    temp.push(ids[i]);
    }
    if (!temp.length) return ids;
    return temp;
}