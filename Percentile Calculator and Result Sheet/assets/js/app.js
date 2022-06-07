
        var HTML_Quize = parseInt(prompt("Enter HTML_Quize Marks"));
        var CssAssignments = parseInt(prompt("Enter CssAssignments Marks"));
        var  JavaScript_Projects = parseInt(prompt("Enter  JavaScript_Projects Marks"));

        function Percentage(num1, num2, num3) {
            var x = num1 + num2 + num3;
            var z = Math.floor(x / 300 * 100) //percentage formula
            return z;
        }

        var Total = Percentage(HTML_Quize, CssAssignments, JavaScript_Projects);
        document.write("Total Percentage is :" + Total + "%")

        