const itemDetails = {
    "id": "5ec045dd5f4c99b1ff2b82f5",
    "name": "Colleen",
    "description": "זהו טקסט שאמור להיות ממש ממש ארוך כל כך ארוך שזה נהייה ממש ממש ארוך כבר זהו טקסט שאמור להיות ממש ממש ארוך כל כך ארוך שזה נהייה ממש ממש ארוך כבר זהו טקסט שאמור להיות ממש ממש ארוך כל כך ארוך שזה נהייה ממש ממש ארוך כבר זהו טקסט שאמור להיות ממש ממש ארוך כל כך ארוך שזה נהייה ממש ממש ארוך כבר ",
    "basePrice": 9999,
    "discounts": [{
        type: "between",
        by: {min: 10, max: 20},
        value: {amount: 10, type: "p"}
    }],
    "amount": {min: 5, max: 100, available: 100},
    "variations": {
        "1": {
            name: "גודל",
            options:
                {
                    "1": {
                        name: "S",
                        imageId: "3",
                        isDefault: true,
                    },
                    "2": {
                        name: "XL",
                        extraPrice: 5,
                        imageId: "1"
                    },
                    "3": {
                        name: "L",
                        extraPrice: 3,
                        imageId: "2"
                    },
                }
        },
        "2": {
            name: "צבע",
            options: {
                "1": {
                    name: "אדום",
                    extraPrice: 5,
                    imageId: "4"
                },
                "2": {
                    name: "שחור",
                    imageId: "5",
                    isDefault: true,
                    extraPrice: 5,
                },
                "3": {
                    name: "לבן",
                    extraPrice: 10,
                    imageId: "6",
                },

            }
        }
    },
    "images":
        {
            "1":
                {
                    urlSuffix: "https://contents.mediadecathlon.com/p116436/k$71945ccdd284976c9533b2f11a0ac9b2/crank-arm-tightening-bolts.jpg?&f=400x400",
                }
            ,
            "2":
                {
                    isDefault: true,
                    urlSuffix: "https://st-adidas-isr.mncdn.com/content/images/thumbs/0013406_allover-print-pants_fm3408_standard-view.jpeg",
                }
            ,
            "3":
                {
                    urlSuffix: "https://st-adidas-isr.mncdn.com/content/images/thumbs/0016805_3-stripes-no-show-socks-3-pairs_aa2281_side-center-view.jpeg",
                }
            ,
            "4":
                {
                    urlSuffix: "https://st-adidas-isr.mncdn.com/content/images/thumbs/0008399_backpack_fj2494_front-view.jpeg",
                }
            ,
            "5":
                {
                    urlSuffix: "https://5.imimg.com/data5/ON/KT/MY-3989090/ms-nuts-and-bolts-500x500.jpg",
                }
            ,
            "6":
                {
                    urlSuffix: "data:image/jpeg;base64,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",
                }
            ,
            "7":
                {
                    urlSuffix: "https://images.homedepot-static.com/productImages/2ab2c5e9-5d47-41ae-b2d1-7321ff665812/svn/everbilt-flange-bolts-802538-64_1000.jpg",
                }
            ,
            "8":
                {
                    urlSuffix: "https://www.onlineplaygrounds.co.uk/media/product/303/socket-countersunk-recessed-screws-bolts-zinc-plated-e0b.jpg",
                }
            ,
            "9":
                {
                    urlSuffix: "https://contents.mediadecathlon.com/p116436/k$71945ccdd284976c9533b2f11a0ac9b2/crank-arm-tightening-bolts.jpg?&f=800x800",
                }
            ,
            "10":
                {
                    urlSuffix: "https://contents.mediadecathlon.com/p116436/k$71945ccdd284976c9533b2f11a0ac9b2/crank-arm-tightening-bolts.jpg?&f=800x800",
                }
            ,
            "11":
                {
                    urlSuffix: "https://contents.mediadecathlon.com/p116436/k$71945ccdd284976c9533b2f11a0ac9b2/crank-arm-tightening-bolts.jpg?&f=800x800",
                }
            ,
            "12":
                {
                    urlSuffix: "https://contents.mediadecathlon.com/p116436/k$71945ccdd284976c9533b2f11a0ac9b2/crank-arm-tightening-bolts.jpg?&f=800x800",
                }
            ,
            "13":
                {
                    urlSuffix: "http://placehold.it/32x32",
                }
            ,
            "14":
                {
                    urlSuffix: "http://placehold.it/32x32",
                }
            ,
            "15":
                {
                    urlSuffix: "http://placehold.it/32x32",
                }
            ,
            "16":
                {
                    urlSuffix: "http://placehold.it/32x32",
                }
            ,
            "17":
                {
                    urlSuffix: "http://placehold.it/32x32",
                }
            ,
            "18":
                {
                    urlSuffix: "http://placehold.it/32x32",
                }
            ,
        }
    ,
}

export const fetchItemDetails = async ({id}) => {
    return new Promise(r => setTimeout(() => r(itemDetails), 1200))
};
