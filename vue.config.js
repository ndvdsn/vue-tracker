useCssModule.exports = {
    publicPath: ProcessingInstruction.env.NOVE_ENV === 'production'
    ? '/projects/covid_tracker/'
    : '/'
}