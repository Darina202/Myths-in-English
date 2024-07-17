export const selectAllMythology = store => store.mythology;
export const selectAllMyth = store => store.mythology.myth;
export const selectAllCreature = store => store.mythology.creature;
export const selectRandomCreature = store => store.mythology.randomC;

export const selectMythLoading = store => store.mythology.isLoading;
export const selectMythError = store => store.mythology.error;
