export function createUser(form) {
    const user = {
        name: form.get('name-input'),
        character: form.get('character'),
        sanity: 100,
        media: 0,
        deprogrammed: 0,
        completed: {}
    };

    return user;
}