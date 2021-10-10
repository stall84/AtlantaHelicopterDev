
export const handler = async (event:any) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'GRAB XOLA FROM HERE!'
            },
            null,
            2
        )
    }
}