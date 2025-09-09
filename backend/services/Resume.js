export const Resume = async (resume) => {
    try {
        console.log(resume);
    } catch (error) {
        return { status: 500, message: error }
    }
}
