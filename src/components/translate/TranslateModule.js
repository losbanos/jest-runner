export const getCurrentNation = nation => nation || 'GE';
export const setNation = nation => () => {
    return nation.charAt(0).toUpperCase().concat(nation.slice(1));
};
export const getTranslations = () => {
    return {
        strings: {
            'british-english': {
                greeting: 'Hello',
                bye: 'Bye'
            },
            malaysian: {
                greeting: 'Satu',
                bye: 'Mari'
            },
            china: {
                greeting: 'Ni hao',
                bye: 'zai jian'
            }
        }
    };
};
