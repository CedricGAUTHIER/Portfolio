const datas=["About", "Before", "Training", "Now", "CV", "Projects", "Contact"];

export let itemsOpened={};
export let itemsVisited={};
datas.forEach(item => {
    itemsOpened={
        ...itemsOpened,
        [item]: false,
    }
    itemsVisited={
        ...itemsVisited,
        [item]: false,
    }
});

