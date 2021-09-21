export const sampleResponse = {
    data: {
        results: [
            {
                "adult": false,
                "backdrop_path": "/uHmvk8FnoxpgujDU0RIXLkv2fNt.jpg",
                "genre_ids": [16, 35],
                "id": 573164,
                "original_language": "es",
                "original_title": "Un rescate de huevitos",
                "overview": "A rooster and his fowl partner embark on a dangerous trip to the Congo to recover their stolen eggs from a group of Russian goons.",
                "popularity": 1069.598,
                "poster_path": "/wrlQnKHLCBheXMNWotyr5cVDqNM.jpg",
                "release_date": "2021-08-12",
                "title": "Eggs Run",
                "video": false,
                "vote_average": 8.3,
                "vote_count": 214
            },
            {
                "adult": false,
                "backdrop_path": "/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg",
                "genre_ids": [
                    28,
                    878,
                    12
                ],
                "id": 588228,
                "original_language": "en",
                "original_title": "The Tomorrow War",
                "overview": "The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester. Determined to save the world for his young daughter, Dan teams up with a brilliant scientist and his estranged father in a desperate quest to rewrite the fate of the planet.",
                "popularity": 1705.386,
                "poster_path": "/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
                "release_date": "2021-07-02",
                "title": "The Tomorrow War",
                "video": false,
                "vote_average": 8.1,
                "vote_count": 4103
            },
            {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                    28,
                    878
                ],
                "id": 848890,
                "original_language": "en",
                "original_title": "The Tomorrow War 2",
                "overview": "Sequel to The Tomorrow War (2021).",
                "popularity": 0.6,
                "poster_path": null,
                "release_date": "",
                "title": "The Tomorrow War 2",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": "/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
                "genre_ids": [
                    28,
                    12,
                    14,
                    35
                ],
                "id": 436969,
                "original_language": "en",
                "original_title": "The Suicide Squad",
                "overview": "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
                "popularity": 3162.455,
                "poster_path": "/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg",
                "release_date": "2021-07-28",
                "title": "The Suicide Squad",
                "video": false,
                "vote_average": 7.9,
                "vote_count": 3900
            },
            {
                "adult": false,
                "backdrop_path": "/mtRW6eAwOO27h3zrfU2foQFW7Hg.jpg",
                "genre_ids": [
                    16,
                    10751,
                    12,
                    35
                ],
                "id": 675445,
                "original_language": "en",
                "original_title": "PAW Patrol: The Movie",
                "overview": "Ryder and the pups are called to Adventure City to stop Mayor Humdinger from turning the bustling metropolis into a state of chaos.",
                "popularity": 1623.365,
                "poster_path": "/ic0intvXZSfBlYPIvWXpU1ivUCO.jpg",
                "release_date": "2021-08-09",
                "title": "PAW Patrol: The Movie",
                "video": false,
                "vote_average": 7.9,
                "vote_count": 434
            }
        ]
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get: jest.fn().mockResolvedValue(sampleResponse)
}