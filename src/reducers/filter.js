const base = 'all'

const filter = (state = base, { type, activeFilter }) => {
    switch (type) {
        case 'CHANGE_FILTER':
            return activeFilter;
            break;
        default:
            return state
    }
}

export default filter 