export const getCurrentNation = nation => nation || 'GE';
export const setNation = nation => () => nation.charAt(0).toUpperCase().concat(nation.slice(1));
export const getTranslations = () => ({
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
});
