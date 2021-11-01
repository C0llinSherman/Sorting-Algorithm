function sort(list) {
    let sortedList = []
    let listLength = list.length
    while (sortedList.length != listLength)
        for (let j = -1; j <= list.length; j++) {
            let min = list[0]
            for (let i = -1; i <= list.length; i++) {
                if (list[i] < min) {
                    min = list[i]
                }
            }
            sortedList.push(min)
            list.splice(list.indexOf(min), 1)
        }
    return sortedList
}
