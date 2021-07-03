module.exports = {
    pluralize_people: amount => {
        if(amount === 1) {
            return `${amount} person`;
        }
        return `${amount} people`;
    }
}