/**
 * Inputmasker voor postcode veld
 *
 * @author Joris Ros <joris.ros@gmail.com>
 * @returns {fn}
 */
$.fn.postcode = function() {

    $(this).keydown(function (e) {

        var correction = 0;

        if (e.which >= 96 && e.which <= 105) {
            correction = 48;
        }

        var char = String.fromCharCode(e.which - correction);
        var value = $(this).val();

        if(e.which == 9)
        {
            return true;
        }

        if (e.which == 46) {
            return true;
        }

        if (e.which == 8 || e.which == 48) {
            return true;
        }

        if (value.length < 4) {
            if ((e.which >= 96 && e.which <= 105) || (e.which >= 48 && e.which <= 57) || e.which == 8 || e.which == 46) {
                if (IsNumeric(char)) {
                    $(this).val(value + char);
                } else {
                    return false;
                }
            }
        }

        if (value.length >= 4 && value.length < 6) {
            if (!IsNumeric(char)) {
                $(this).val(value + char);
            } else {
                return false;
            }
        }

        return false;
    });

    /**
     * Kijkt of waarde wel nummeriek is
     *
     * @param input
     * @returns {boolean}
     */
    function IsNumeric(input)
    {
        return (input - 0) == input && (input+'').replace(/^\s+|\s+$/g, "").length > 0;
    }

    return this;
}