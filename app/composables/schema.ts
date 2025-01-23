export interface HomepageHero {
    hero: {
        heading: string;
        image: {
            asset: {
                _ref: string;
                url: string;
            },
            alt: string;
        }
    }
}

interface Feature {
    title: string
    subtitle: string
    image: {
        asset: {
            _ref: string
        }
    }
}

interface FeaturesSection {
    heading: string
    subtitle: string
    features: Feature[]
}