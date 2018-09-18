var init = function () {
       
    CSSHelpers.styleSheetTitle = 'MultiColumn';

    var form, styleSheet, updateStyle

    form = document.getElementById('multi');
    styleSheet = CSSHelpers.getStyleSheet(CSSHelpers.styleSheetTitle);

    updateStyle = function(domEvent){
      console.log(domEvent.target.value)
       var cnval;

       if(domEvent.target.id == 'column-number' || domEvent.target.id == 'column-width') {
            cnval = [];

            cnval[0] = document.querySelector('#column-width').value;
            cnval[1] = ' ';
            cnval[2] = document.querySelector('#column-number').value;

            CSSHelpers.setProp('multi-col', 'columns', cnval.join(''));
       }  else {
            cnval = domEvent.target.value;
            CSSHelpers.setProp('multi-col', domEvent.target.id, cnval);
       }
    }

    form.addEventListener('input', updateStyle);
    form.addEventListener('change', updateStyle);
    form.addEventListener('submit', CSSHelpers.preventSubmit);
    form.addEventListener('reset', CSSHelpers.resetRules);

};

window.addEventListener('load', init);
