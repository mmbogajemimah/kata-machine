export default function bs_list(haystack: number[], needle: number): boolean {
    
    let low = 0;
    let high = haystack.length - 1;

    while(low <= high) {
        let midvalue = Math.floor(low + (high - low) / 2)
        let value = haystack[midvalue]
        if (value === needle) {
            return true;
        } else if (value < needle) {
            low = midvalue + 1;
        } else if (value > needle)  {
            high = midvalue - 1;
        }
    }
    return false
}
