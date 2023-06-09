/**
 * 
 * @param {string} string the content to be cleaned
 * @returns non html string
 */
const clean = (string) => {
    return string.replace(/<[^>]*>/g, '');
}

export default clean;