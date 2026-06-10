function getWeight(type) {

    if (type === "Placement")
        return 3;

    if (type === "Result")
        return 2;

    return 1;
}

export function getTopNotifications(notifications) {

    return notifications
        .sort((a, b) => {

            const diff =
                getWeight(b.Type) -
                getWeight(a.Type);

            if (diff !== 0)
                return diff;

            return (
                new Date(b.Timestamp) -
                new Date(a.Timestamp)
            );
        })
        .slice(0, 10);
}