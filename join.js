function load() {
        var select = document.getElementById("site");
        window.location = select.options[select.selectedIndex].value;
    }

    function submitForm() {
        var inputs = document.getElementsByTagName("input");
        var values = [];
        for (var i = 0; i < inputs.length; i++) {
            values.push(inputs[i].value);
        }

        var isValid = true;
        for (var i = 0; i < values.length; i++) {
            if (values[i].trim() === "") {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            var newWindow = window.open("", "", "width=400,height=300");
            newWindow.document.write("<table border='1'>");
            for (var i = 0; i < inputs.length; i++) {
                newWindow.document.write("<tr><td>" + inputs[i].previousElementSibling.textContent + "</td><td>" + inputs[i].value + "</td></tr>");
            }
            newWindow.document.write("</table>");
            newWindow.document.close();
        } else {
            alert("모든 필드를 입력하세요.");
        }
    }