const mcqs = 
[
    {
        question: " What does the file mode 'r' indicate when used with <samp>fopen</samp> in C?",
        options: [' Write only', ' Read only', ' Read and write', ' Append'],
        answer: "B. Read only",
        explanation: " The 'r' mode opens a file for reading. If the file does not exist, <samp>fopen</samp> returns <samp>NULL</samp>."
    },
    {
        question: " What happens when you open a file in 'w' mode using <samp>fopen</samp>?",
        options: [' The file is opened for reading', ' The file is opened for writing and existing data is preserved', ' The file is opened for writing and existing data is truncated', ' The file is opened for appending'],
        answer: "C. The file is opened for writing and existing data is truncated",
        explanation: " The 'w' mode opens a file for writing and truncates the file to zero length, discarding any existing data."
    },
    {
        question: " Which mode should you use with <samp>fopen</samp> to append data to an existing file?",
        options: [' "r"', ' "w"', ' "a"', ' "rw"'],
        answer: "C. 'a'",
        explanation: " The 'a' mode opens a file for appending. Data written to the file is added to the end, preserving existing data."
    },
    {
        question: " If you open a file with mode 'r+' using <samp>fopen</samp>, what operations can you perform on the file?",
        options: [' Read only', ' Write only', ' Read and write', ' Append only'],
        answer: "C. Read and write",
        explanation: " The 'r+' mode opens a file for both reading and writing. The file must exist; otherwise, <samp>fopen</samp> returns <samp>NULL</samp>."
    },
    {
        question: " What is the difference between 'w' and 'w+' modes in <samp>fopen</samp>?",
        options: [' "w" is for reading, "w+" is for writing', ' "w" is for writing, "w+" is for reading and writing', ' "w" appends data, "w+" truncates the file', ' "w" opens a file, "w+" closes a file'],
        answer: "B. 'w' is for writing, 'w+' is for reading and writing",
        explanation: " The 'w' mode opens a file for writing and truncates it, while 'w+' opens a file for both reading and writing and also truncates it."
    },
    {
        question: " Which mode should you use if you want to open a file for both reading and appending?",
        options: [' "r"', ' "w"', ' "a+"', ' "rw"'],
        answer: "C. 'a+'",
        explanation: " The 'a+' mode opens a file for both reading and appending. Data written to the file is added to the end, preserving existing data."
    },
    {
        question: " What does the mode 'rb' mean when opening a file using <samp>fopen</samp>?",
        options: [' Read binary', ' Read and write binary', ' Write binary', ' Append binary'],
        answer: "A. Read binary",
        explanation: " The 'rb' mode opens a file for reading in binary mode. This is used for files that contain binary data rather than text."
    },
    {
        question: " How does the 'wb' mode differ from the 'w' mode in <samp>fopen</samp>?",
        options: [' "wb" writes text, "w" writes binary', ' "wb" appends binary, "w" appends text', ' "wb" writes binary, "w" writes text', ' There is no difference'],
        answer: "C. 'wb' writes binary, 'w' writes text",
        explanation: " The 'wb' mode opens a file for writing in binary mode, while 'w' opens a file for writing in text mode."
    },
    {
        question: " What happens if you try to open a file with mode 'a' and the file does not exist?",
        options: [' <samp>fopen</samp> returns <samp>NULL</samp>', ' The file is created', ' The program crashes', ' The existing data is truncated'],
        answer: "B. The file is created",
        explanation: " When a file is opened with mode 'a' and it does not exist, the file is created."
    },
    {
        question: " Which mode allows both reading from and writing to a file without truncating the file, starting at the beginning?",
        options: [' "r+"', ' "w+"', ' "a+"', ' "rw"'],
        answer: "A. 'r+'",
        explanation: " The 'r+' mode opens a file for both reading and writing without truncating the file. The file pointer is placed at the beginning of the file."
    },
    {
        question: " What is the primary purpose of file handling in C programming?",
        options: [' To manage memory allocation', ' To store data permanently on a disk', ' To perform arithmetic operations', ' To create graphical user interfaces'],
        answer: "B. To store data permanently on a disk",
        explanation: " File handling in C is primarily used to store and retrieve data permanently on a disk, making it possible to save program output and reuse it later."
    },
    {
        question: " Which standard library function is used to open a file in C?",
        options: [' <samp>fread</samp>', ' <samp>fwrite</samp>', ' <samp>fopen</samp>', ' <samp>fclose</samp>'],
        answer: "C.fopen",
        explanation: " The <samp>fopen</samp> function is used to open a file. It takes the file name and the mode (e.g., 'r' for read, 'w' for write) as arguments."
    },
    {
        question: " What does the mode 'r+' mean when opening a file using <samp>fopen</samp>?",
        options: [' Read-only', ' Write-only', ' Read and write', ' Append'],
        answer: "C. Read and write",
        explanation: " The mode 'r+' opens a file for both reading and writing. The file must exist; otherwise, <samp>fopen</samp> will return <samp>NULL</samp>."
    },
    {
        question: " Which function is used to write data to a file in C?",
        options: [' <samp>fread</samp>', ' <samp>fprintf</samp>', ' <samp>fclose</samp>', ' <samp>fseek</samp>'],
        answer: "B.fprintf",
        explanation: " The <samp>fprintf</samp> function is used to write formatted data to a file, similar to how <samp>printf</samp> works for writing to the console."
    },
    {
        question: " How do you close a file that has been opened using <samp>fopen</samp>?",
        options: [' <samp>fclose(file);</samp>', ' <samp>file_close(file);</samp>', ' <samp>close(file);</samp>', ' <samp>end(file);</samp>'],
        answer: "A.fclose(file);",
        explanation: " The <samp>fclose</samp> function is used to close an opened file, freeing up the resources associated with it."
    },
    {
        question: " Which function is used to read a single character from a file in C?",
        options: [' <samp>fread</samp>', ' <samp>fgetc</samp>', ' <samp>fgets</samp>', ' <samp>fputc</samp>'],
        answer: "B.fgetc",
        explanation: " The <samp>fgetc</samp> function reads a single character from a file and returns it as an <samp>int</samp>."
    },
    {
        question: " What is the purpose of the <samp>ftell</samp> function?",
        options: [' To write data to a file', ' To get the current position in a file', ' To close a file', ' To open a file'],
        answer: "B. To get the current position in a file",
        explanation: " The <samp>ftell</samp> function returns the current file position indicator for the specified stream."
    },
    {
        question: " How do you move the file pointer to the beginning of a file?",
        options: [' <samp>rewind(file);</samp>', ' <samp>fseek(file, 0, SEEK_SET);</samp>', ' Both A and B', ' None of the above'],
        answer: "C. Both A and B",
        explanation: " Both <samp>rewind(file);</samp> and <samp>fseek(file, 0, SEEK_SET);</samp> move the file pointer to the beginning of the file."
    },
    {
        question: " Which of the following functions reads a string from a file?",
        options: [' <samp>fread</samp>', ' <samp>fgets</samp>', ' <samp>fputs</samp>', ' <samp>fseek</samp>'],
        answer: "B.fgets",
        explanation: " The <samp>fgets</samp> function reads a string from a file until a newline character is encountered or the specified number of characters is read."
    },
    {
        question: " What happens if you try to open a file with <samp>fopen</samp> using mode 'w' and the file already exists?",
        options: [' The file is opened and data is appended to it', ' The file is opened and existing data is preserved', ' The file is opened and existing data is truncated', ' The file cannot be opened'],
        answer: "C. The file is opened and existing data is truncated",
        explanation: " When a file is opened with mode 'w', the existing file is truncated to zero length and any existing data is lost."
    },
    {
        question: " What is the correct way to define the main function to accept command-line arguments in C?",
        options: [' <samp>int main()</samp>', ' <samp>int main(char *argv[])</samp>', ' <samp>int main(int argc, char *argv[])</samp>', ' <samp>int main(char *argc, char *argv[])</samp>'],
        answer: "C.int main(int argc, char *argv[])",
        explanation: " The correct definition for the main function to accept command-line arguments includes <samp>int argc</samp> for the argument count and <samp>char *argv[]</samp> for the argument vector."
    },
    {
        question: " In the function definition <samp>int main(int argc, char *argv[])</samp>, what does <samp>argc</samp> represent?",
        options: [' The number of characters in all arguments', ' The number of command-line arguments', ' The length of the first command-line argument', ' The number of bytes in the program'],
        answer: "B. The number of command-line arguments",
        explanation: " <samp>argc</samp> is an integer that represents the count of command-line arguments passed to the program, including the program's name."
    },
    {
        question: " In the function definition <samp>int main(int argc, char *argv[])</samp>, what does <samp>argv</samp> represent?",
        options: [' A pointer to the first command-line argument', ' An array of pointers to the command-line arguments', ' A string containing all command-line arguments', ' A pointer to the number of command-line arguments'],
        answer: "B. An array of pointers to the command-line arguments",
        explanation: " <samp>argv</samp> is an array of character pointers listing all the arguments."
    },
    {
        question: " How do you access the second command-line argument in <samp>argv</samp>?",
        options: [' <samp>argv[0]</samp>', ' <samp>argv[1]</samp>', ' <samp>argv[2]</samp>', ' <samp>argv[-1]</samp>'],
        answer: "B.argv[1]",
        explanation: " <samp>argv[0]</samp> contains the program name, so <samp>argv[1]</samp> contains the second command-line argument."
    },
    {
        question: " What value does <samp>argc</samp> hold if no command-line arguments are passed to the program?",
        options: [' 0', ' 1', ' -1', ' It is undefined'],
        answer: "B. 1",
        explanation: " <samp>argc</samp> is 1 because it includes the program's name as the first argument."
    },
    {
        question: " What is the output of the following program if executed with <samp>./a.out test</samp>?<pre><code>c<br/>#include<br/>int main(int argc, char *argv[]) {<br/>printf('%s\n', argv[1]);<br/>return 0;<br/>}</code></pre>",
        options: [' <samp>./a.out</samp>', ' <samp>test</samp>', ' <samp>1</samp>', ' <samp>argv</samp>'],
        answer: "B.test",
        explanation: " <samp>argv[1]</samp> contains the first command-line argument after the program's name."
    },
    {
        question: " Which library is typically included for handling command-line arguments?",
        options: [' <samp>stdlib.h</samp>', ' <samp>stdio.h</samp>', ' <samp>string.h</samp>', ' No specific library is required'],
        answer: "D. No specific library is required",
        explanation: " Command-line arguments are handled by the main function signature itself and do not require an additional library."
    },
    {
        question: " What happens if you try to access <samp>argv[argc]</samp>?",
        options: [' It gives the last command-line argument', ' It gives a segmentation fault', ' It is always NULL', ' It gives the first command-line argument'],
        answer: "C. It is always NULL",
        explanation: " <samp>argv[argc]</samp> is defined to be a null pointer, which marks the end of the arguments."
    },
    {
        question: " How can you convert a command-line argument to an integer in C?",
        options: [' <samp>atoi(argv[1])</samp>', ' <samp>itoa(argv[1])</samp>', ' <samp>int(argv[1])</samp>', ' <samp>strtol(argv[1])</samp>'],
        answer: "A.atoi(argv[1])",
        explanation: " The <samp>atoi</samp> function converts a string to an integer."
    },
    {
        question: " If a program is run with the command <samp>./program one two three</samp>, what is the value of <samp>argv[3]</samp>?",
        options: [' <samp>./program</samp>', ' <samp>one</samp>', ' <samp>two</samp>', ' <samp>three</samp>'],
        answer: "D.three",
        explanation: " <samp>argv[3]</samp> contains the fourth element passed to the program, which is <samp>three</samp> in this case."
    },
    {
        question: " Which function is used to read a single character from a text file in C?",
        options: [' <samp>fgetc</samp>', ' <samp>fputc</samp>', ' <samp>fscanf</samp>', ' <samp>fprintf</samp>'],
        answer: "A.fgetc",
        explanation: " The <samp>fgetc</samp> function reads a single character from a file and returns it as an <samp>int</samp>."
    },
    {
        question: " What does the <samp>fputc</samp> function do in C?",
        options: [' Reads a single character from a file', ' Writes a single character to a file', ' Reads formatted data from a file', ' Writes formatted data to a file'],
        answer: "B. Writes a single character to a file",
        explanation: " The <samp>fputc</samp> function writes a single character to a file and returns the character written on success."
    },
    {
        question: " Which function is used to read formatted input from a file?",
        options: [' <samp>fgets</samp>', ' <samp>fputc</samp>', ' <samp>fscanf</samp>', ' <samp>fprintf</samp>'],
        answer: "C.fscanf",
        explanation: " The <samp>fscanf</samp> function reads formatted input from a file, similar to how <samp>scanf</samp> reads formatted input from the standard input."
    },
    {
        question: " What is the correct syntax to read a character from a file using <samp>fgetc</samp>?",
        options: [' <samp>char ch = fgetc(file);</samp>', ' <samp>char ch = getc(file);</samp>', ' Both A and B', ' None of the above'],
        answer: "C. Both A and B",
        explanation: " Both <samp>fgetc</samp> and <samp>getc</samp> can be used to read a character from a file. The syntax <samp>char ch = fgetc(file);</samp> is correct."
    },
    {
        question: " Which of the following statements correctly writes the character 'A' to a file using <samp>fputc</samp>?",
        options: [' <samp>fputc("A", file);</samp>', ' <samp>putc("A", file);</samp>', ' Both A and B', ' None of the above'],
        answer: "C. Both A and B",
        explanation: " Both <samp>fputc</samp> and <samp>putc</samp> can be used to write a character to a file. The syntax <samp>fputc('A', file);</samp> is correct."
    },
    {
        question: " What is the return value of <samp>fgetc</samp> when the end of a file is reached?",
        options: [' 0', ' EOF', ' -1', ' NULL'],
        answer: "B. EOF",
        explanation: " The <samp>fgetc</samp> function returns EOF (End Of File) when the end of the file is reached or if there is an error."
    },
    {
        question: " How can you use <samp>fscanf</samp> to read an integer from a file?",
        options: [' <samp>fscanf(file, "%d", #);</samp>', ' <samp>fscanf(file, "%s", num);</samp>', ' <samp>fscanf(file, "%c", #);</samp>', ' <samp>fscanf(file, "%f", #);</samp>'],
        answer: "A.fscanf(file, '%d', #);",
        explanation: " The <samp>fscanf</samp> function can be used to read formatted input from a file. To read an integer, the format specifier '%d' is used."
    },
    {
        question: " Which function would you use to write the string 'Hello' to a file?",
        options: [' <samp>fgetc</samp>', ' <samp>fputc</samp>', ' <samp>fputs</samp>', ' <samp>fscanf</samp>'],
        answer: "C.fputs",
        explanation: " The <samp>fputs</samp> function writes a string to a file. <samp>fputc</samp> writes a single character, not a string."
    },
    {
        question: " How do you read a string from a file using <samp>fscanf</samp>?",
        options: [' <samp>fscanf(file, "%d", str);</samp>', ' <samp>fscanf(file, "%s", str);</samp>', ' <samp>fscanf(file, "%c", str);</samp>', ' <samp>fscanf(file, "%f", str);</samp>'],
        answer: "B.fscanf(file, '%s', str);",
        explanation: " The <samp>fscanf</samp> function reads formatted input from a file. To read a string, the format specifier '%s' is used."
    },
    {
        question: " Which function would you use to write a single character to a file?",
        options: [' <samp>fgetc</samp>', ' <samp>fputc</samp>', ' <samp>fputs</samp>', ' <samp>fscanf</samp>'],
        answer: "B.fputc",
        explanation: " The <samp>fputc</samp> function writes a single character to a file. <samp>fgetc</samp> is used for reading a single character, and <samp>fputs</samp> is used for writing strings."
    },
    {
        question: " Which function is used to open a file in C?",
        options: [' <samp>fread</samp>', ' <samp>fwrite</samp>', ' <samp>fopen</samp>', ' <samp>fclose</samp>'],
        answer: "C.fopen",
        explanation: " The <samp>fopen</samp> function is used to open a file. It takes the file name and the mode (e.g., 'r' for read, 'w' for write) as arguments."
    },
    {
        question: " How do you close a file that has been opened using <samp>fopen</samp>?",
        options: [' <samp>fclose(file);</samp>', ' <samp>file_close(file);</samp>', ' <samp>close(file);</samp>', ' <samp>end(file);</samp>'],
        answer: "A.fclose(file);",
        explanation: " The <samp>fclose</samp> function is used to close an opened file, freeing up the resources associated with it."
    },
    {
        question: " What does the <samp>feof</samp> function do?",
        options: [' Checks for an end-of-file condition', ' Opens a file', ' Closes a file', ' Reads a character from a file'],
        answer: "A. Checks for an end-of-file condition",
        explanation: " The <samp>feof</samp> function checks if the end-of-file indicator associated with the stream is set, indicating that the end of the file has been reached."
    },
    {
        question: " Which function moves the file pointer to a specific location in a file?",
        options: [' <samp>fopen</samp>', ' <samp>fclose</samp>', ' <samp>fseek</samp>', ' <samp>fread</samp>'],
        answer: "C.fseek",
        explanation: " The <samp>fseek</samp> function is used to move the file pointer to a specified location within a file."
    },
    {
        question: " How do you move the file pointer to the beginning of a file?",
        options: [' <samp>rewind(file);</samp>', ' <samp>fseek(file, 0, SEEK_SET);</samp>', ' Both A and B', ' None of the above'],
        answer: "C. Both A and B",
        explanation: " Both <samp>rewind(file);</samp> and <samp>fseek(file, 0, SEEK_SET);</samp> move the file pointer to the beginning of the file."
    },
    {
        question: " What is the syntax to open a file named 'data.txt' for reading in binary mode?",
        options: [' <samp>fopen("data.txt", "r");</samp>', ' <samp>fopen("data.txt", "rb");</samp>', ' <samp>fopen("data.txt", "w");</samp>', ' <samp>fopen("data.txt", "wb");</samp>'],
        answer: "B.fopen('data.txt', 'rb');",
        explanation: " The 'rb' mode opens the file for reading in binary mode."
    },
    {
        question: " What is the return type of the <samp>fopen</samp> function?",
        options: [' <samp>int</samp>', ' <samp>FILE *</samp>', ' <samp>void</samp>', ' <samp>char *</samp>'],
        answer: "B.FILE *",
        explanation: " The <samp>fopen</samp> function returns a pointer to a <samp>FILE</samp> object that can be used to identify the file in subsequent operations."
    },
    {
        question: " Which function can be used to determine the current position of the file pointer?",
        options: [' <samp>fopen</samp>', ' <samp>ftell</samp>', ' <samp>fseek</samp>', ' <samp>fread</samp>'],
        answer: "B.ftell",
        explanation: " The <samp>ftell</samp> function returns the current value of the file position indicator for the specified stream."
    },
    {
        question: " Which function would you use to clear the end-of-file and error indicators for a given stream?",
        options: [' <samp>fseek</samp>', ' <samp>rewind</samp>', ' <samp>clearerr</samp>', ' <samp>feof</samp>'],
        answer: "C.clearerr",
        explanation: " The <samp>clearerr</samp> function clears the end-of-file and error indicators for the specified stream."
    },
    {
        question: " Which of the following functions sets the file position indicator for the stream to the beginning of the file?",
        options: [' <samp>fseek</samp>', ' <samp>rewind</samp>', ' <samp>ftell</samp>', ' <samp>feof</samp>'],
        answer: "B.rewind",
        explanation: " The <samp>rewind</samp> function sets the file position indicator for the stream to the beginning of the file and clears the error and end-of-file indicators for the stream."
    },
    {
        question: " What is a bit field in C programming?",
        options: [' A data structure for storing integers', ' A structure member used to store multiple values in a single integer', ' A type of pointer', ' A dynamic array'],
        answer: "B. A structure member used to store multiple values in a single integer",
        explanation: " Bit fields in C are used within a structure to pack multiple values into a single integer, allowing for efficient use of memory."
    },
    {
        question: " How do you declare a bit field with a width of 3 bits?",
        options: [' <samp>int a:3;</samp>', ' <samp>int a[3];</samp>', ' <samp>int a*3;</samp>', ' <samp>int a@3;</samp>'],
        answer: "A.int a:3;",
        explanation: " The syntax <samp>int a:3;</samp> declares a bit field named <samp>a</samp> with a width of 3 bits."
    },
    {
        question: " What will be the size of the following structure?",
        options: [' 1 byte', ' 2 bytes', ' 4 bytes', ' 8 bytes'],
        answer: "B. 2 bytes",
        explanation: " The structure contains two bit fields, one with a width of 3 bits and the other with a width of 5 bits. The total size is 8 bits, which fits into 1 byte, but alignment requirements usually increase it to 2 bytes."
    },
    {
        question: " Can bit fields be declared without a name?",
        options: [' Yes', ' No'],
        answer: "A. Yes",
        explanation: " Bit fields can be declared without a name to create padding within the structure. These are known as anonymous bit fields."
    },
    {
        question: " Which of the following is a valid way to declare a structure with bit fields?",
        options: ['<pre><code>struct {<br/>int a:2;<br/>float b:6;<br/>};</code></pre>', '<pre><code>struct {<br/>char a:3;<br/>unsigned int b:5;<br/>};</code></pre>', '<pre><code>struct {<br/>double a:4;<br/>long b:7;<br/>};</code></pre>', '<pre><code>struct {<br/>short a:3;<br/>double b:6;<br/>};</code></pre>'],
        answer: "B.",
        explanation: " Only integral types (<samp>int</samp>, <samp>char</samp>, <samp>short</samp>, <samp>long</samp>) and <samp>unsigned</samp> versions of these can be used for bit fields. Floating-point types (<samp>float</samp>, <samp>double</samp>) cannot be used."
    },
    {
        question: " How would you set a bit field named <samp>flag</samp> to 1?",
        options: [' <samp>flag = 1;</samp>', ' <samp>flag = true;</samp>', ' <samp>flag = "1";</samp>', ' <samp>flag = 0x1;</samp>'],
        answer: "A.flag = 1;",
        explanation: " Bit fields can be set just like normal structure members by assigning a value directly to them."
    },
    {
        question: " Which of the following correctly declares a bit field with both signed and unsigned members?",
        options: ['<pre><code>struct {<br/>unsigned int a:3;<br/>signed int b:5;<br/>};</code></pre>', '<pre><code>struct {<br/>int a:3;<br/>float b:5;<br/>};</code></pre>', '<pre><code>struct {<br/>char a:3;<br/>long b:5;<br/>};</code></pre>', '<pre><code>struct {<br/>unsigned short a:3;<br/>double b:5;<br/>};</code></pre>'],
        answer: "A.",
        explanation: " Bit fields can be signed or unsigned integers, but not floating-point types."
    },
    {
        question: " What happens if you assign a value that exceeds the width of a bit field?",
        options: [' The value is truncated to fit the bit field width', ' The program crashes', ' The value is stored in the next bit field', ' An error is thrown'],
        answer: "A. The value is truncated to fit the bit field width",
        explanation: " If a value exceeds the width of a bit field, it is truncated to fit within the specified number of bits."
    },
    {
        question: " Which keyword is used to define bit fields in C?",
        options: [' <samp>bit</samp>', ' <samp>field</samp>', ' <samp>unsigned</samp>', ' None of the above'],
        answer: "D. None of the above",
        explanation: " Bit fields are defined using integral types (<samp>int</samp>, <samp>char</samp>, etc.) followed by a colon and the bit width, not a special keyword."
    },
    {
        question: " Can bit fields in a structure be accessed using pointers?",
        options: [' Yes', ' No'],
        answer: "A. Yes",
        explanation: " Bit fields in a structure can be accessed using pointers to the structure, just like regular structure members."
    },
    {
        question: " What is a bit mask in C programming?",
        options: [' A way to perform arithmetic operations', ' A method to perform string manipulations', ' A binary pattern used to set, clear, or toggle bits in a byte or word', ' A technique for memory allocation'],
        answer: "C. A binary pattern used to set, clear, or toggle bits in a byte or word",
        explanation: " A bit mask is a binary pattern used to manipulate specific bits in a byte or word by using bitwise operations."
    },
    {
        question: " How would you set the 3rd bit (from the right) of an integer <samp>x</samp> using a bit mask?",
        options: [' <samp>x = x | 0x04</samp>', ' <samp>x = x &amp; 0x04</samp>', ' <samp>x = x ^ 0x04</samp>', ' <samp>x = x ~ 0x04</samp>'],
        answer: "A.x = x | 0x04",
        explanation: " The bitwise OR operation <samp>|</samp> with the bit mask <samp>0x04</samp> (which has the 3rd bit set) sets the 3rd bit of <samp>x</samp>."
    },
    {
        question: " Which operation would you use to clear the 2nd bit (from the right) of an integer <samp>y</samp>?",
        options: [' <samp>y = y &amp; 0xFD</samp>', ' <samp>y = y | 0xFD</samp>', ' <samp>y = y ^ 0xFD</samp>', ' <samp>y = y ~ 0xFD</samp>'],
        answer: "A.y = y & 0xFD",
        explanation: " The bitwise AND operation <samp>&amp;</samp> with the bit mask <samp>0xFD</samp> (which has all bits set except the 2nd bit) clears the 2nd bit of <samp>y</samp>."
    },
    {
        question: " What does the expression <samp>(x &amp; 0x0F)</samp> do?",
        options: [' Sets the lower 4 bits of <samp>x</samp>', ' Clears the lower 4 bits of <samp>x</samp>', ' Isolates the lower 4 bits of <samp>x</samp>', ' Toggles the lower 4 bits of <samp>x</samp>'],
        answer: "C. Isolates the lower 4 bits ofx",
        explanation: " The bitwise AND operation <samp>&amp;</samp> with the bit mask <samp>0x0F</samp> isolates the lower 4 bits of <samp>x</samp>, setting all other bits to 0."
    },
    {
        question: " How would you toggle the 5th bit (from the right) of an integer <samp>z</samp>?",
        options: [' <samp>z = z &amp; 0x10</samp>', ' <samp>z = z | 0x10</samp>', ' <samp>z = z ^ 0x10</samp>', ' <samp>z = z ~ 0x10</samp>'],
        answer: "C.z = z ^ 0x10",
        explanation: " The bitwise XOR operation <samp>^</samp> with the bit mask <samp>0x10</samp> toggles the 5th bit of <samp>z</samp>."
    },
    {
        question: " Which bitwise operation would you use to create a mask that has the first 3 bits set?",
        options: [' <samp>0x07</samp>', ' <samp>0x0F</samp>', ' <samp>0x1F</samp>', ' <samp>0x03</samp>'],
        answer: "A.0x07",
        explanation: " The binary representation of <samp>0x07</samp> is <samp>0000 0111</samp>, which has the first 3 bits set."
    },
    {
        question: " How would you use a bit mask to check if the 4th bit (from the right) of an integer <samp>a</samp> is set?",
        options: [' <samp>(a &amp; 0x08) == 0</samp>', ' <samp>(a | 0x08) == 0</samp>', ' <samp>(a ^ 0x08) == 0</samp>', ' <samp>(a &amp; 0x08) != 0</samp>'],
        answer: "D.(a & 0x08) != 0",
        explanation: " The bitwise AND operation <samp>&amp;</samp> with the bit mask <samp>0x08</samp> isolates the 4th bit, and if it is set, the result is not zero."
    },
    {
        question: " What is the purpose of the expression <samp>(b &amp; ~0x0F)</samp>?",
        options: [' Sets the lower 4 bits of <samp>b</samp>', ' Clears the lower 4 bits of <samp>b</samp>', ' Toggles the lower 4 bits of <samp>b</samp>', ' Isolates the lower 4 bits of <samp>b</samp>'],
        answer: "B. Clears the lower 4 bits ofb",
        explanation: " The bitwise NOT operation <samp>~0x0F</samp> inverts the lower 4 bits, and the bitwise AND operation <samp>&amp;</samp> clears the lower 4 bits of <samp>b</samp>."
    },
    {
        question: " Which of the following statements correctly sets the bits in the positions indicated by the bit mask <samp>0x2A</samp>?",
        options: [' <samp>c = c &amp; 0x2A</samp>', ' <samp>c = c | 0x2A</samp>', ' <samp>c = c ^ 0x2A</samp>', ' <samp>c = c ~ 0x2A</samp>'],
        answer: "B.c = c | 0x2A",
        explanation: " The bitwise OR operation <samp>|</samp> with the bit mask <samp>0x2A</samp> sets the bits in the positions indicated by <samp>0x2A</samp>."
    },
    {
        question: " How would you isolate the upper 4 bits of an 8-bit integer <samp>d</samp>?",
        options: [' <samp>d &amp; 0xF0</samp>', ' <samp>d | 0xF0</samp>', ' <samp>d ^ 0xF0</samp>', ' <samp>d ~ 0xF0</samp>'],
        answer: "A.d & 0xF0",
        explanation: " The bitwise AND operation <samp>&amp;</samp> with the bit mask <samp>0xF0</samp> isolates the upper 4 bits of the 8-bit integer <samp>d</samp>."
    },
    {
        question: " What is the result of the bitwise AND operation between the binary numbers <samp>1101</samp> and <samp>1011</samp>?",
        options: [' <samp>1100</samp>', ' <samp>1001</samp>', ' <samp>1111</samp>', ' <samp>1000</samp>'],
        answer: "B.1001",
        explanation: " The bitwise AND operation results in a binary number where each bit is set to 1 if both corresponding bits of the operands are 1."
    },
    {
        question: " Which of the following represents the bitwise OR operation in C?",
        options: [' <samp>&amp;</samp>', ' <samp>|</samp>', ' <samp>^</samp>', ' <samp>~</samp>'],
        answer: "B.|",
        explanation: " The <samp>|</samp> operator is used to perform the bitwise OR operation."
    },
    {
        question: " What does the bitwise XOR operation between <samp>0101</samp> and <samp>0011</samp> yield?",
        options: [' <samp>0110</samp>', ' <samp>0001</samp>', ' <samp>1111</samp>', ' <samp>1010</samp>'],
        answer: "A.0110",
        explanation: " The bitwise XOR operation results in a binary number where each bit is set to 1 if the corresponding bits of the operands are different."
    },
    {
        question: " Which operator is used for the bitwise NOT operation in C?",
        options: [' <samp>&amp;</samp>', ' <samp>|</samp>', ' <samp>^</samp>', ' <samp>~</samp>'],
        answer: "D.~",
        explanation: " The <samp>~</samp> operator is used for the bitwise NOT operation, which inverts all the bits of its operand."
    },
    {
        question: " What is the result of applying the bitwise NOT operation to the binary number <samp>0101</samp>?",
        options: [' <samp>1010</samp>', ' <samp>1111</samp>', ' <samp>1101</samp>', ' <samp>0110</samp>'],
        answer: "A.1010",
        explanation: " The bitwise NOT operation inverts all bits, turning <samp>0</samp> to <samp>1</samp> and <samp>1</samp> to <samp>0</samp>."
    },
    {
        question: " If <samp>x = 5</samp>, what is the value of <samp>x &lt;&lt; 2</samp>?",
        options: [' <samp>20</samp>', ' <samp>10</samp>', ' <samp>15</samp>', ' <samp>25</samp>'],
        answer: "A.20",
        explanation: " The left shift operation (<samp>&lt;&lt; 2</samp>) shifts the bits of <samp>5</samp> (which is <samp>0101</samp> in binary) two positions to the left, resulting in <samp>10100</samp> (which is <samp>20</samp> in decimal)."
    },
    {
        question: " What is the result of the right shift operation <samp>12 &gt;&gt; 2</samp>?",
        options: [' <samp>3</samp>', ' <samp>6</samp>', ' <samp>4</samp>', ' <samp>2</samp>'],
        answer: "A.3",
        explanation: " The right shift operation (<samp>&gt;&gt; 2</samp>) shifts the bits of <samp>12</samp> (which is <samp>1100</samp> in binary) two positions to the right, resulting in <samp>0011</samp> (which is <samp>3</samp> in decimal)."
    },
    {
        question: " Which of the following statements about bitwise operations is true?",
        options: [' Bitwise AND and OR operations are commutative but not associative.', ' Bitwise XOR operation is commutative and associative.', ' Bitwise NOT operation requires two operands.', ' Left shift and right shift operations are commutative.'],
        answer: "B. Bitwise XOR operation is commutative and associative.",
        explanation: " The bitwise XOR operation is both commutative and associative."
    },
    {
        question: " How do you perform a bitwise AND operation between two integers <samp>a</samp> and <samp>b</samp> in C?",
        options: [' <samp>a &amp; b</samp>', ' <samp>a | b</samp>', ' <samp>a ^ b</samp>', ' <samp>a ~ b</samp>'],
        answer: "A.a & b",
        explanation: " The <samp>&amp;</samp> operator is used to perform a bitwise AND operation between two integers."
    },
    {
        question: " What does the expression <samp>(a &gt;&gt; 1) &amp; 1</samp> evaluate to?",
        options: [' The least significant bit of <samp>a</samp>', ' The second least significant bit of <samp>a</samp>', ' The most significant bit of <samp>a</samp>', ' The value of <samp>a</samp> divided by 2'],
        answer: "B. The second least significant bit ofa",
        explanation: " The right shift operation <samp>&gt;&gt; 1</samp> shifts the bits of <samp>a</samp> one position to the right, and the bitwise AND operation <samp>&amp; 1</samp> extracts the least significant bit of the shifted result, which corresponds to the second least significant bit of the original <samp>a</samp>."
    },
    {
        question: " What is the main purpose of conditional compilation in C?",
        options: [' To optimize the code', ' To include or exclude parts of the code based on specific conditions', ' To handle runtime errors', ' To link object files'],
        answer: "B. To include or exclude parts of the code based on specific conditions",
        explanation: " Conditional compilation allows the compiler to include or exclude parts of the code based on certain conditions, making the code more flexible and adaptable."
    },
    {
        question: " Which preprocessor directive is used to conditionally compile code if a macro is defined?",
        options: [' <samp>#ifdef</samp>', ' <samp>#ifndef</samp>', ' <samp>#if</samp>', ' <samp>#elif</samp>'],
        answer: "A.#ifdef",
        explanation: " The <samp>#ifdef</samp> directive checks if a macro is defined and includes the following code if it is."
    },
    {
        question: " How would you conditionally compile code if a macro <samp>DEBUG</samp> is not defined?",
        options: [' <samp>#ifdef DEBUG</samp>', ' <samp>#ifndef DEBUG</samp>', ' <samp>#if DEBUG</samp>', ' <samp>#elif DEBUG</samp>'],
        answer: "B.#ifndef DEBUG",
        explanation: " The <samp>#ifndef</samp> directive includes the code if the macro <samp>DEBUG</samp> is not defined."
    },
    {
        question: " What does the following code do if <samp>DEBUG</samp> is not defined?<pre><code>#ifdef DEBUG<br/>printf('Debug mode\n');<br/>#else<br/>printf('Release mode\n');<br/>#endif</code></pre>",
        options: [' Prints "Debug mode"', ' Prints "Release mode"', ' Prints nothing', ' Causes a compilation error'],
        answer: "B. Prints 'Release mode'",
        explanation: " Since <samp>DEBUG</samp> is not defined, the code within the <samp>#else</samp> block is executed."
    },
    {
        question: " Which directive is used to end conditional compilation started with <samp>#ifdef</samp>?",
        options: [' <samp>#else</samp>', ' <samp>#endif</samp>', ' <samp>#elif</samp>', ' <samp>#endifdef</samp>'],
        answer: "B.#endif",
        explanation: " The <samp>#endif</samp> directive ends the block of code started by <samp>#ifdef</samp>."
    },
    {
        question: " How do you check if a macro <samp>VERSION</samp> is defined to a specific value using conditional compilation?",
        options: [' <samp>#ifdef VERSION == 2</samp>', ' <samp>#ifndef VERSION == 2</samp>', ' <samp>#if VERSION == 2</samp>', ' <samp>#elif VERSION == 2</samp>'],
        answer: "C.#if VERSION == 2",
        explanation: " The <samp>#if</samp> directive allows you to check if a macro is defined to a specific value."
    },
    {
        question: " What is the purpose of the <samp>#elif</samp> directive in conditional compilation?",
        options: [' To end conditional compilation', ' To check another condition if the previous condition was false', ' To define a new macro', ' To include a header file'],
        answer: "B. To check another condition if the previous condition was false",
        explanation: " The <samp>#elif</samp> directive is used to specify a new condition to be checked if the previous condition was not met."
    },
    {
        question: " Which of the following correctly demonstrates nested conditional compilation?",
        options: ['<pre><code>#ifdef A<br/>#ifdef B<br/>// code<br/>#endif<br/>#endif</code></pre>', '<pre><code>#ifdef A<br/>#ifndef B<br/>// code<br/>#endif<br/>#endif</code></pre>', '<pre><code>#ifdef A<br/>#if B<br/>// code<br/>#endif<br/>#endif</code></pre>', ' All of the above'],
        answer: "D. All of the above",
        explanation: " All the given examples show valid forms of nested conditional compilation."
    },
    {
        question: " What does the following code do if both <samp>FEATURE1</samp> and <samp>FEATURE2</samp> are defined?<pre><code>#ifdef FEATURE1<br/>#ifdef FEATURE2<br/>printf('Both features are enabled\n');<br/>#endif<br/>#endif</code></pre>",
        options: [' Prints "Both features are enabled"', ' Prints nothing', ' Causes a compilation error', ' Prints "Feature1 is enabled"'],
        answer: "A. Prints 'Both features are enabled'",
        explanation: " Since both <samp>FEATURE1</samp> and <samp>FEATURE2</samp> are defined, the nested <samp>#ifdef</samp> directives include the code to print the message."
    },
    {
        question: " How do you exclude code from compilation if a macro <samp>TEST</samp> is defined?",
        options: [' <samp>#ifdef TEST</samp>', ' <samp>#ifndef TEST</samp>', ' <samp>#if defined(TEST)</samp>', ' <samp>#if !defined(TEST)</samp>'],
        answer: "D.#if !defined(TEST)",
        explanation: " The <samp>#if !defined(TEST)</samp> directive excludes the code from compilation if the macro <samp>TEST</samp> is defined."
    },
    {
        question: " What is the purpose of the <samp>#include</samp> directive in C?",
        options: [' To define macros', ' To include header files or external files', ' To conditionally compile code', ' To define constants'],
        answer: "B. To include header files or external files",
        explanation: " The <samp>#include</samp> directive is used to include the contents of a file, typically header files, into the current file."
    },
    {
        question: " Which of the following is the correct syntax to include a standard library header file?",
        options: [' <samp>#include "filename"</samp>', ' <samp>#include <filename></filename></samp>', ' <samp>#include (filename)</samp>', ' <samp>#include [filename]</samp>'],
        answer: "B.#include",
        explanation: " Angle brackets <samp>&lt; &gt;</samp> are used to include standard library header files."
    },
    {
        question: " How do you include a user-defined header file in your program?",
        options: [' <samp>#include "filename"</samp>', ' <samp>#include <filename></filename></samp>', ' <samp>#include (filename)</samp>', ' <samp>#include {filename}</samp>'],
        answer: "A.#include 'filename'",
        explanation: " Double quotes <samp>''</samp> are used to include user-defined header files."
    },
    {
        question: " What happens if a file included using <samp>#include</samp> cannot be found?",
        options: [' The compiler issues a warning', ' The compiler issues an error and stops the compilation process', ' The compiler includes a default file', ' The program runs without the included file'],
        answer: "B. The compiler issues an error and stops the compilation process",
        explanation: " If the file cannot be found, the compiler generates an error and stops the compilation."
    },
    {
        question: " Which of the following is a correct example of including the standard input/output library?",
        options: [' <samp>#include "stdio.h"</samp>', ' <samp>#include <stdio.h></stdio.h></samp>', ' <samp>#include [stdio.h]</samp>', ' <samp>#include (stdio.h)</samp>'],
        answer: "B.#include",
        explanation: " The correct syntax to include standard libraries is using angle brackets."
    },
    {
        question: " What is the primary advantage of using header files in C?",
        options: [' To speed up program execution', ' To reduce compilation time', ' To allow reuse of code and improve modularity', ' To enable conditional compilation'],
        answer: "C. To allow reuse of code and improve modularity",
        explanation: " Header files allow for code reuse and better organization by separating declarations from definitions."
    },
    {
        question: " Which of the following directives would you use to prevent multiple inclusions of the same header file?",
        options: [' <samp>#ifndef</samp>', ' <samp>#define</samp>', ' <samp>#include</samp>', ' <samp>#undef</samp>'],
        answer: "A.#ifndef",
        explanation: " The <samp>#ifndef</samp> directive is used to prevent multiple inclusions by conditionally including code."
    },
    {
        question: " What is the correct way to use include guards in a header file?",
        options: [' <samp>#define HEADER_H</samp> followed by <samp>#endif</samp>', ' <samp>#ifndef HEADER_H</samp> followed by <samp>#define HEADER_H</samp> and ending with <samp>#endif</samp>', ' <samp>#ifdef HEADER_H</samp> followed by <samp>#define HEADER_H</samp> and ending with <samp>#endif</samp>', ' <samp>#undef HEADER_H</samp> followed by <samp>#define HEADER_H</samp> and ending with <samp>#endif</samp>'],
        answer: "B.#ifndef HEADER_Hfollowed by#define HEADER_Hand ending with#endif",
        explanation: " Include guards use <samp>#ifndef</samp>, <samp>#define</samp>, and <samp>#endif</samp> to prevent multiple inclusions."
    },
    {
        question: " Which preprocessor directive allows you to include the content of a file only if a specific macro is defined?",
        options: [' <samp>#ifdef</samp>', ' <samp>#include</samp>', ' <samp>#define</samp>', ' <samp>#ifndef</samp>'],
        answer: "A.#ifdef",
        explanation: " The <samp>#ifdef</samp> directive includes content only if the specified macro is defined."
    },
    {
        question: " What does the following preprocessor directive do?<pre><code>#include 'myheader.h'</code></pre>",
        options: [' Includes a standard library file named <samp>myheader.h</samp>', ' Includes a user-defined file named <samp>myheader.h</samp>', ' Defines a macro named <samp>myheader.h</samp>', ' Conditionally includes <samp>myheader.h</samp>'],
        answer: "B. Includes a user-defined file namedmyheader.h",
        explanation: " Double quotes are used to include user-defined header files."
    },
    {
        question: " What is the primary purpose of using macro substitution directives in C?",
        options: [' To improve code readability', ' To enable code reusability and reduce code duplication', ' To speed up the execution of code', ' To create function prototypes'],
        answer: "B. To enable code reusability and reduce code duplication",
        explanation: " Macro substitution directives are used to create reusable code segments and reduce code duplication by allowing text substitution before compilation."
    },
    {
        question: " Which of the following directives is used to define a macro in C?",
        options: [' <samp>#include</samp>', ' <samp>#define</samp>', ' <samp>#ifdef</samp>', ' <samp>#pragma</samp>'],
        answer: "B.#define",
        explanation: " The <samp>#define</samp> directive is used to define macros in C programming."
    },
    {
        question: " How do you define a macro named <samp>PI</samp> with the value <samp>3.14</samp>?",
        options: [' <samp>#macro PI 3.14</samp>', ' <samp>#define PI 3.14</samp>', ' <samp>#include PI 3.14</samp>', ' <samp>#ifdef PI 3.14</samp>'],
        answer: "B.#define PI 3.14",
        explanation: " The correct syntax to define a macro is <samp>#define MACRO_NAME value</samp>."
    },
    {
        question: " What is the output of the following code?<pre><code>#define SQUARE(x) ((x) * (x))<br/>printf('%d', SQUARE(4));</code></pre>",
        options: [' 8', ' 16', ' 4', ' Compilation error'],
        answer: "B. 16",
        explanation: " The macro <samp>SQUARE(x)</samp> substitutes <samp>((x) * (x))</samp> and computes <samp>4 * 4</samp>, resulting in 16."
    },
    {
        question: " Which of the following correctly defines a macro for a function-like substitution?",
        options: [' <samp>#define MAX 100</samp>', ' <samp>#define MAX(x, y) (x &gt; y ? x : y)</samp>', ' <samp>#define MAX (x &gt; y ? x : y)</samp>', ' <samp>#define MAX(x, y) x &gt; y ? x : y</samp>'],
        answer: "B.#define MAX(x, y) (x > y ? x : y)",
        explanation: " Function-like macros are defined using the syntax <samp>#define MACRO_NAME(arguments) definition</samp>."
    },
    {
        question: " What is the risk of using macros with arguments in C?",
        options: [' Macros cannot have arguments', ' Macros with arguments are slower', ' Macros with arguments can lead to unexpected results due to operator precedence', ' Macros with arguments take up more memory'],
        answer: "C. Macros with arguments can lead to unexpected results due to operator precedence",
        explanation: " Macros with arguments can cause unexpected results if not properly parenthesized due to operator precedence rules."
    },
    {
        question: " What is the output of the following code?<pre><code>#define INC(x) x + 1<br/>printf('%d', INC(5) * 2);</code></pre>",
        options: [' 11', ' 12', ' 7', ' 10'],
        answer: "A. 11",
        explanation: " The macro <samp>INC(x)</samp> substitutes <samp>x + 1</samp>, so <samp>INC(5) * 2</samp> becomes <samp>5 + 1 * 2</samp>, which evaluates to <samp>5 + 2 = 11</samp> due to operator precedence."
    },
    {
        question: " How can you undefine a macro in C?",
        options: [' <samp>#undef MACRO_NAME</samp>', ' <samp>#define MACRO_NAME</samp>', ' <samp>#include MACRO_NAME</samp>', ' <samp>#ifdef MACRO_NAME</samp>'],
        answer: "A.#undef MACRO_NAME",
        explanation: " The <samp>#undef</samp> directive is used to undefine a previously defined macro."
    },
    {
        question: " What is the output of the following code if <samp>DEBUG</samp> is defined?<pre><code>#ifdef DEBUG<br/>#define LOG(x) printf('Debug: %s\n', x)<br/>#else<br/>#define LOG(x)<br/>#endif<br/>LOG('Test');</code></pre>",
        options: [' <samp>Debug: Test</samp>', ' <samp>Test</samp>', ' No output', ' Compilation error'],
        answer: "A.Debug: Test",
        explanation: " If <samp>DEBUG</samp> is defined, the <samp>LOG(x)</samp> macro is defined to print the debug message."
    },
    {
        question: " Which of the following macros will cause an error if used improperly?",
        options: [' <samp>#define MAX 100</samp>', ' <samp>#define ADD(x, y) (x + y)</samp>', ' <samp>#define PRINT(msg) printf("%s\\n", msg)</samp>', ' <samp>#define MIN(x, y) x &lt; y ? x : y</samp>'],
        answer: "D.#define MIN(x, y) x < y ? x : y",
        explanation: " The macro <samp>MIN(x, y)</samp> is not properly parenthesized, which can lead to incorrect results due to operator precedence when used in expressions."
    },
    {
        question: " What is the main role of the C preprocessor?",
        options: [' To compile the C code', ' To execute the C code', ' To perform text substitution and macro expansion before compilation', ' To link object files'],
        answer: "C. To perform text substitution and macro expansion before compilation",
        explanation: " The C preprocessor processes directives such as macros and file inclusions before the actual compilation of the C code begins."
    },
    {
        question: " Which of the following is a preprocessor directive?",
        options: [' <samp>#define</samp>', ' <samp>#include</samp>', ' <samp>#ifdef</samp>', ' All of the above'],
        answer: "D. All of the above",
        explanation: " <samp>#define</samp>, <samp>#include</samp>, and <samp>#ifdef</samp> are all examples of preprocessor directives."
    },
    {
        question: " What is the purpose of the <samp>#define</samp> directive?",
        options: [' To include a header file', ' To conditionally compile code', ' To define macros and constants', ' To create a function prototype'],
        answer: "C. To define macros and constants",
        explanation: " The <samp>#define</samp> directive is used to create macros and define constants for use in the code."
    },
    {
        question: " How do you include a standard header file using the preprocessor?",
        options: [' <samp>#include <filename></filename></samp>', ' <samp>#include "filename"</samp>', ' <samp>#include (filename)</samp>', ' <samp>#include {filename}</samp>'],
        answer: "A.#include",
        explanation: " The angle brackets <samp>&lt; &gt;</samp> are used to include standard header files in C."
    },
    {
        question: " What does the following preprocessor directive do?<pre><code>#ifdef DEBUG<br/>printf('Debug mode\n');<br/>#endif</code></pre>",
        options: [' It always prints "Debug mode"', ' It prints "Debug mode" only if DEBUG is defined', ' It prints "Debug mode" only if DEBUG is not defined', ' It causes a compilation error'],
        answer: "B. It prints 'Debug mode' only if DEBUG is defined",
        explanation: " The <samp>#ifdef</samp> directive checks if DEBUG is defined and includes the code within the block only if it is."
    },
    {
        question: " Which of the following statements about the <samp>#include</samp> directive is true?",
        options: [' It can only include header files', ' It can include both header files and source files', ' It can only include standard library files', ' It must be placed at the end of the file'],
        answer: "B. It can include both header files and source files",
        explanation: " The <samp>#include</samp> directive can include any file, not just header files, though it is typically used for headers."
    },
    {
        question: " What is the output of the following code if <samp>DEBUG</samp> is not defined?<pre><code>#ifdef DEBUG<br/>printf('Debug mode\n');<br/>#else<br/>printf('Release mode\n');<br/>#endif</code></pre>",
        options: [' <samp>Debug mode</samp>', ' <samp>Release mode</samp>', ' No output', ' Compilation error'],
        answer: "B.Release mode",
        explanation: " Since <samp>DEBUG</samp> is not defined, the code inside the <samp>#else</samp> block is executed."
    },
    {
        question: " What is the effect of the <samp>#undef</samp> directive?",
        options: [' It undefines a previously defined macro', ' It includes a header file', ' It conditionally compiles code', ' It defines a new macro'],
        answer: "A. It undefines a previously defined macro",
        explanation: " The <samp>#undef</samp> directive is used to undefine an existing macro."
    },
    {
        question: " What is the purpose of the <samp>#pragma</samp> directive?",
        options: [' To include a header file', ' To control compiler-specific features', ' To define a macro', ' To conditionally compile code'],
        answer: "B. To control compiler-specific features",
        explanation: " The <samp>#pragma</samp> directive provides a way to use compiler-specific features and options."
    },
    {
        question: " Which preprocessor directive is used to check if a macro is not defined?",
        options: [' <samp>#ifdef</samp>', ' <samp>#ifndef</samp>', ' <samp>#undef</samp>', ' <samp>#define</samp>'],
        answer: "B.#ifndef",
        explanation: " The <samp>#ifndef</samp> directive checks if a macro is not defined and includes the following code only if the macro is not defined."
    },
    {
        question: " What is the main difference between a structure and a union in C?                ",
        options: [' Structures can store different data types, while unions cannot      ', ' Structures allocate separate memory for each member, while unions share the same memory for all members      ', ' Structures can have only one member, while unions can have multiple members      ', ' Structures cannot be nested, while unions can be nested    '],
        answer: "B. Structures allocate separate memory for each member, while unions share the same memory for all members",
        explanation: " Structures allocate memory for each member separately, while unions allocate a single memory space shared by all members.    "
    },
    {
        question: " Which keyword is used to define a union in C?                ",
        options: [' <samp>struct</samp>', ' <samp>union</samp>', ' <samp>typedef</samp>', ' <samp>enum</samp>'],
        answer: "B.union",
        explanation: " The keyword <samp>union</samp> is used to define a union in C.    "
    },
    {
        question: " How is the memory size determined for a structure?                ",
        options: [' By the size of the largest member      ', ' By the sum of the sizes of all members      ', ' By the number of members      ', ' By the data type of the first member    '],
        answer: "B. By the sum of the sizes of all members",
        explanation: " The memory size of a structure is the sum of the sizes of all its members.    "
    },
    {
        question: " How is the memory size determined for a union?                ",
        options: [' By the size of the largest member      ', ' By the sum of the sizes of all members      ', ' By the number of members      ', ' By the data type of the first member    '],
        answer: "A. By the size of the largest member",
        explanation: " The memory size of a union is determined by the size of its largest member.    "
    },
    {
        question: " Given the following declarations, which statement is true?                <pre><code>struct ExampleStruct {<br/>int a;<br/>float b;<br/>};<br/>union ExampleUnion {<br/>int a;<br/>float b;<br/>};</code></pre>",
        options: [' <samp>sizeof(ExampleStruct) == sizeof(ExampleUnion)</samp>', ' <samp>sizeof(ExampleStruct) &lt; sizeof(ExampleUnion)</samp>', ' <samp>sizeof(ExampleStruct) &gt; sizeof(ExampleUnion)</samp>', ' <samp>sizeof(ExampleStruct) &lt;= sizeof(ExampleUnion)</samp>'],
        answer: "C.sizeof(ExampleStruct) > sizeof(ExampleUnion)",
        explanation: " The size of <samp>ExampleStruct</samp> is greater because it includes the sizes of both members, while <samp>ExampleUnion</samp> only allocates space for the largest member.    "
    },
    {
        question: " What happens when a value is assigned to a member of a union?                ",
        options: [' The value is stored in all members      ', ' Only that member"s value is stored, others are undefined      ', ' The union resizes to accommodate the value      ', ' All members of the union are initialized to the same value    '],
        answer: "B. Only that member's value is stored, others are undefined",
        explanation: " Assigning a value to a union member stores the value in the shared memory, making other members' values undefined.    "
    },
    {
        question: " Which of the following is a valid way to define and initialize a structure in C?                ",
        options: [' <samp>struct MyStruct { int x; float y; } s = {10, 3.14};</samp>', ' <samp>struct MyStruct { int x; float y; }; s = {10, 3.14};</samp>', ' <samp>union MyStruct { int x; float y; } s = {10, 3.14};</samp>', ' <samp>union MyStruct { int x; float y; }; s = {10, 3.14};</samp>'],
        answer: "A.struct MyStruct { int x; float y; } s = {10, 3.14};",
        explanation: " The correct way to define and initialize a structure is by declaring the structure and then initializing it.    "
    },
    {
        question: " Which of the following correctly accesses a member of a structure?                ",
        options: [' <samp>struct_var-&gt;member</samp>', ' <samp>struct_var.member</samp>', ' <samp>struct_var:member</samp>', ' <samp>struct_var|member</samp>'],
        answer: "B.struct_var.member",
        explanation: " The dot operator (<samp>.</samp>) is used to access members of a structure.    "
    },
    {
        question: " Which of the following correctly accesses a member of a union?                ",
        options: [' <samp>union_var-&gt;member</samp>', ' <samp>union_var.member</samp>', ' <samp>union_var:member</samp>', ' <samp>union_var|member</samp>'],
        answer: "B.union_var.member",
        explanation: " The dot operator (<samp>.</samp>) is used to access members of a union.    "
    },
    {
        question: " What is a typical use case for unions in C?                ",
        options: [' To store multiple values of the same type      ', ' To create arrays of different data types      ', ' To efficiently use memory by storing one of several possible types      ', ' To perform type checking at compile time    '],
        answer: "C. To efficiently use memory by storing one of several possible types",
        explanation: " Unions are used to efficiently manage memory by allowing storage of different data types in the same memory location, useful in scenarios where only one type of data is used at a time."
    },
    {
        question: " What is a union in C programming?                ",
        options: [' A collection of different data types that can be accessed simultaneously      ', ' A collection of variables that share the same memory location      ', ' A derived data type for arrays      ', ' A function that groups related variables    '],
        answer: "B. A collection of variables that share the same memory location",
        explanation: " A union is a data structure in C that allows storing different data types in the same memory location.    "
    },
    {
        question: " How do you declare a union in C?                ",
        options: [' <samp>union { int x; float y; }</samp>', ' <samp>union UnionName { int x; float y; }</samp>', ' <samp>struct UnionName { int x; float y; }</samp>', ' <samp>union UnionName { int x; float y; } UnionName;</samp>'],
        answer: "B.union UnionName { int x; float y; }",
        explanation: " The correct way to declare a union is to use the keyword <samp>union</samp>, followed by the union name and the members within curly braces.    "
    },
    {
        question: " How is memory allocated for a union?                ",
        options: [' Equal to the size of the largest member      ', ' Equal to the sum of the sizes of all members      ', ' Equal to the size of the smallest member      ', ' Equal to the number of members    '],
        answer: "A. Equal to the size of the largest member",
        explanation: " Memory allocated for a union is equal to the size of its largest member, as all members share the same memory space.    "
    },
    {
        question: " What is the output of the following code?                <pre><code>union Data {<br/>int i;<br/>float f;<br/>};<br/>union Data d;<br/>d.i = 10;<br/>printf('%d', d.i);</code></pre>",
        options: [' 0      ', ' 10      ', ' Undefined behavior      ', ' Compiler error    '],
        answer: "B. 10",
        explanation: " The value 10 is assigned to the integer member <samp>i</samp> of the union <samp>d</samp>, and it is correctly printed.    "
    },
    {
        question: " Which of the following is a correct way to initialize a union in C?                ",
        options: [' <samp>union Data d = {10};</samp>', ' <samp>union Data d = {10, 3.14};</samp>', ' <samp>union Data d = {i: 10};</samp>', ' <samp>union Data d = {.i = 10};</samp>'],
        answer: "A.union Data d = {10};",
        explanation: " Unions can be initialized using a single value that corresponds to the first member of the union.    "
    },
    {
        question: " What happens if you assign a value to one member of a union and then access another member?                ",
        options: [' The value of the other member is undefined      ', ' The value of the other member is the same as the assigned member      ', ' The value of the other member is zero      ', ' The value of the other member is unchanged    '],
        answer: "A. The value of the other member is undefined",
        explanation: " Since all members of a union share the same memory location, modifying one member can cause undefined behavior when accessing another member.    "
    },
    {
        question: " Which of the following statements about unions is true?                ",
        options: [' Unions can have functions as members      ', ' All members of a union can be accessed simultaneously      ', ' Unions can be used to create variant records      ', ' Unions cannot be initialized    '],
        answer: "C. Unions can be used to create variant records",
        explanation: " Unions are often used to create variant records, which allow storing different data types in the same memory location.    "
    },
    {
        question: " What is the output of the following code?                <pre><code>union Value {<br/>int i;<br/>char c;<br/>};<br/>union Value v;<br/>v.i = 65;<br/>printf('%c', v.c);</code></pre>",
        options: [' A      ', ' 65      ', ' Undefined behavior      ', ' Compiler error    '],
        answer: "A. A",
        explanation: " The integer value 65 corresponds to the ASCII character 'A', which is printed.    "
    },
    {
        question: " Can a union have another union as a member?                ",
        options: [' Yes      ', ' No      ', ' Only in C++      ', ' Only if the nested union is anonymous    '],
        answer: "A. Yes",
        explanation: " A union can have another union as a member, just like structures.    "
    },
    {
        question: " What is the size of the following union?                <pre><code>union Mixed {<br/>char c;<br/>int i;<br/>double d;<br/>};</code></pre>",
        options: [' Size of <samp>char</samp>', ' Size of <samp>int</samp>', ' Size of <samp>double</samp>', ' Sum of sizes of <samp>char</samp>, <samp>int</samp>, and <samp>double</samp>'],
        answer: "C. Size ofdouble",
        explanation: " The size of the union is equal to the size of its largest member, which in this case is <samp>double</samp>.    "
    },
    {
        question: " Which of the following correctly defines a nested structure in C?                ",
        options: [' <samp>struct Outer { struct Inner { int x; int y; }; };</samp>', ' <samp>struct Outer { struct Inner { int x; int y; }; int z; };</samp>', ' <samp>struct Inner { int x; int y; }; struct Outer { struct Inner in; int z; };</samp>', ' <samp>struct Inner { int x; int y; } Inner; struct Outer { Inner in; int z; };</samp>'],
        answer: "C.struct Inner { int x; int y; }; struct Outer { struct Inner in; int z; };",
        explanation: " Nested structures are defined by first defining the inner structure and then using it as a member in the outer structure.    "
    },
    {
        question: " How do you access a member of an inner structure in a nested structure?                ",
        options: [' <samp>outer.inner.member</samp>', ' <samp>outer-&gt;inner-&gt;member</samp>', ' <samp>outer-inner-member</samp>', ' <samp>outer:inner:member</samp>'],
        answer: "A.outer.inner.member",
        explanation: " The dot operator is used to access members of both the outer and inner structures.    "
    },
    {
        question: " Given the nested structure:                <pre><code>struct Inner {<br/>int x;<br/>int y;<br/>};<br/>struct Outer {<br/>struct Inner in;<br/>int z;<br/>};<br/>struct Outer out = {{10, 20}, 30};</code></pre>                What is the value of <samp>out.in.y</samp>?                ",
        options: [' 10      ', ' 20      ', ' 30      ', ' Compiler error    '],
        answer: "B. 20",
        explanation: " The member <samp>y</samp> of the inner structure <samp>in</samp> is initialized to 20.    "
    },
    {
        question: " What is the output of the following code?                <pre><code>struct Inner {<br/>int a;<br/>int b;<br/>};<br/>struct Outer {<br/>struct Inner in;<br/>int c;<br/>};<br/>struct Outer o = {{1, 2}, 3};<br/>printf('%d, %d, %d', o.in.a, o.in.b, o.c);</code></pre>",
        options: [' <samp>1 2 3</samp>', ' <samp>1, 2, 3</samp>', ' <samp>Inner(1, 2) Outer(3)</samp>', ' Compiler error    '],
        answer: "B.1, 2, 3",
        explanation: " The code initializes the members of the nested structure and prints their values.    "
    },
    {
        question: " How can you initialize only the <samp>x</samp> member of the inner structure in a nested structure?                ",
        options: [' <samp>struct Outer o = {.in.x = 10};</samp>', ' <samp>struct Outer o = {.in = {10}};</samp>', ' <samp>struct Outer o = {.x = 10};</samp>', ' <samp>struct Outer o = {10};</samp>'],
        answer: "B.struct Outer o = {.in = {10}};",
        explanation: " Designated initializers allow specific members to be initialized while others remain zero or default.    "
    },
    {
        question: " Given the structures:                <pre><code>struct Address {<br/>char city[50];<br/>int pin;<br/>};<br/>struct Employee {<br/>char name[50];<br/>struct Address addr;<br/>};</code></pre>                How can you initialize an <samp>Employee</samp> structure with name 'John', city 'New York', and pin 10001?                ",
        options: [' <samp>struct Employee e = {"John", {"New York", 10001}};</samp>', ' <samp>struct Employee e = {"John", "New York", 10001};</samp>', ' <samp>struct Employee e = {"John", {.addr.city = "New York", .addr.pin = 10001}};</samp>', ' <samp>struct Employee e = {.name = "John", .addr = {.city = "New York", .pin = 10001}};</samp>'],
        answer: "A.struct Employee e = {'John', {'New York', 10001}};",
        explanation: " Nested structures are initialized by specifying initializer lists for each nested level.    "
    },
    {
        question: " How can you define a function that takes a nested structure as an argument?                ",
        options: [' <samp>void func(struct Outer outer)</samp>', ' <samp>void func(Outer outer)</samp>', ' <samp>void func(struct Outer *outer)</samp>', ' Both A and C    '],
        answer: "D. Both A and C",
        explanation: " Functions can take structures by value or by reference (using pointers).    "
    },
    {
        question: " What is the correct way to access a member of a nested structure using a pointer to the outer structure?                ",
        options: [' <samp>ptr-&gt;in.member</samp>', ' <samp>ptr.in.member</samp>', ' <samp>ptr-&gt;in-&gt;member</samp>', ' <samp>(*ptr).in.member</samp>'],
        answer: "A.ptr->in.member",
        explanation: " The arrow operator is used to access members of the nested structure using a pointer to the outer structure.    "
    },
    {
        question: " What is the output of the following code?                <pre><code>struct Inner {<br/>int x;<br/>};<br/>struct Outer {<br/>struct Inner in;<br/>};<br/>void printX(struct Outer o) {<br/>printf('%d', o.in.x);<br/>}<br/>struct Outer o = {{100}};<br/>printX(o);</code></pre>",
        options: [' <samp>100</samp>', ' <samp>0</samp>', ' <samp>Compiler error</samp>', ' <samp>Garbage value</samp>'],
        answer: "A.100",
        explanation: " The function <samp>printX</samp> prints the <samp>x</samp> member of the inner structure <samp>in</samp> from the nested structure <samp>o</samp>.    "
    },
    {
        question: " Which of the following is true about nested structures?                ",
        options: [' Nested structures cannot be passed to functions      ', ' Nested structures can be initialized using designated initializers      ', ' Members of nested structures can only be accessed using pointers      ', ' Nested structures are not allowed in C    '],
        answer: "B. Nested structures can be initialized using designated initializers",
        explanation: " Nested structures can be initialized using designated initializers, and their members can be accessed using both dot and arrow operators.    "
    },
    {
        question: " How do you access a member of a structure using a structure variable?                ",
        options: [' <samp>struct_var-&gt;member</samp>', ' <samp>struct_var.member</samp>', ' <samp>struct_var:member</samp>', ' <samp>struct_var|member</samp>'],
        answer: "B.struct_var.member",
        explanation: " The dot operator (<samp>.</samp>) is used to access members of a structure using a structure variable.    "
    },
    {
        question: " Given the structure:                <pre><code>struct Point {<br/>int x;<br/>int y;<br/>} p1 = {10, 20};</code></pre>                What is the value of <samp>p1.y</samp>?                ",
        options: [' 10      ', ' 20      ', ' 30      ', ' Compiler error    '],
        answer: "B. 20",
        explanation: " The member <samp>y</samp> of the structure <samp>p1</samp> is initialized to 20.    "
    },
    {
        question: " How do you access a member of a structure using a pointer to a structure?                ",
        options: [' <samp>ptr-&gt;member</samp>', ' <samp>*ptr.member</samp>', ' <samp>ptr*-&gt;member</samp>', ' <samp>ptr.member</samp>'],
        answer: "A.ptr->member",
        explanation: " The arrow operator (<samp>-&gt;</samp>) is used to access members of a structure using a pointer to a structure.    "
    },
    {
        question: " What is the output of the following code?                <pre><code>struct Rectangle {<br/>int length;<br/>int breadth;<br/>};<br/>struct Rectangle r = {15, 10};<br/>struct Rectangle *ptr = &amp;r<br/>printf('%d, %d', ptr-&gt;length, ptr-&gt;breadth);</code></pre>",
        options: [' <samp>15 10</samp>', ' <samp>15, 10</samp>', ' <samp>Rectangle(15, 10)</samp>', ' Compiler error    '],
        answer: "B.15, 10",
        explanation: " The code accesses the <samp>length</samp> and <samp>breadth</samp> members of the structure using a pointer and the arrow operator.    "
    },
    {
        question: " Given the structure:                <pre><code>struct Student {<br/>char name[50];<br/>int roll_no;<br/>};<br/>struct Student s1 = {'John', 101};</code></pre>                How do you change the <samp>roll_no</samp> to 102?                ",
        options: [' <samp>s1.roll_no = 102;</samp>', ' <samp>s1-&gt;roll_no = 102;</samp>', ' <samp>s1:roll_no = 102;</samp>', ' <samp>s1|roll_no = 102;</samp>'],
        answer: "A.s1.roll_no = 102;",
        explanation: " The dot operator is used to modify the <samp>roll_no</samp> member of the structure <samp>s1</samp>.    "
    },
    {
        question: " What does the following code do?                <pre><code>struct Employee {<br/>char name[50];<br/>int id;<br/>float salary;<br/>};<br/>struct Employee e1 = {'Alice', 1001, 50000.0};<br/>struct Employee e2 = e1;<br/>e2.salary = 55000.0;</code></pre>",
        options: [' Creates two identical structure variables <samp>e1</samp> and <samp>e2</samp>', ' Copies <samp>e1</samp> to <samp>e2</samp> and changes <samp>e2</samp>"s salary      ', ' Creates an alias <samp>e2</samp> for <samp>e1</samp>', ' Produces a compiler error    '],
        answer: "B. Copiese1toe2and changese2's salary",
        explanation: " The code copies the values of <samp>e1</samp> to <samp>e2</samp> and then modifies <samp>e2</samp>'s salary.    "
    },
    {
        question: " How can you pass a structure to a function?                ",
        options: [' By value      ', ' By reference      ', ' Both A and B      ', ' Structures cannot be passed to functions    '],
        answer: "C. Both A and B",
        explanation: " Structures can be passed to functions either by value or by reference (using pointers).    "
    },
    {
        question: " What is the output of the following code?                <pre><code>struct Point {<br/>int x;<br/>int y;<br/>};<br/>void printPoint(struct Point p) {<br/>printf('%d, %d', p.x, p.y);<br/>}<br/>struct Point p1 = {5, 10};<br/>printPoint(p1);</code></pre>",
        options: [' <samp>5 10</samp>', ' <samp>5, 10</samp>', ' <samp>Point(5, 10)</samp>', ' Compiler error    '],
        answer: "B.5, 10",
        explanation: " The function <samp>printPoint</samp> prints the <samp>x</samp> and <samp>y</samp> members of the structure <samp>p1</samp>.    "
    },
    {
        question: " What is the correct way to pass a structure pointer to a function?                ",
        options: [' <samp>void func(struct Point *p)</samp>', ' <samp>void func(struct Point p)</samp>', ' <samp>void func(struct Point &amp;p)</samp>', ' <samp>void func(struct Point p*)</samp>'],
        answer: "A.void func(struct Point *p)",
        explanation: " The asterisk (<samp>*</samp>) is used to define a pointer to a structure when passing it to a function.    "
    },
    {
        question: " What is the effect of the following code?                <pre><code>struct Person {<br/>char name[50];<br/>int age;<br/>} p1 = {'John', 30};<br/>struct Person p2;<br/>p2 = p1;</code></pre>",
        options: [' <samp>p2</samp> is an alias for <samp>p1</samp>', ' <samp>p2</samp> is a copy of <samp>p1</samp>', ' <samp>p2</samp> and <samp>p1</samp> share the same memory location      ', ' <samp>p2</samp> is a pointer to <samp>p1</samp>'],
        answer: "B.p2is a copy ofp1",
        explanation: " The structure <samp>p2</samp> is assigned the values of <samp>p1</samp>, creating a copy of <samp>p1</samp>'s data in <samp>p2</samp>.    "
    },
    {
        question: " Which of the following is the correct way to initialize a structure variable?                ",
        options: [' <samp>struct MyStruct x = (10, 20.5);</samp>', ' <samp>struct MyStruct x = {10, 20.5};</samp>', ' <samp>struct MyStruct x = 10, 20.5;</samp>', ' <samp>struct MyStruct x(10, 20.5);</samp>'],
        answer: "B.struct MyStruct x = {10, 20.5};",
        explanation: " Structure variables in C are initialized using curly braces with values corresponding to the structure's members.    "
    },
    {
        question: " What will be the output of the following code?                ",
        options: [' <samp>10 20</samp>', ' <samp>10, 20</samp>', ' <samp>Point(10, 20)</samp>', ' Compiler error    '],
        answer: "B.10, 20",
        explanation: " The structure <samp>p1</samp> is initialized with values 10 and 20, which are accessed using the dot operator.    "
    },
    {
        question: " How do you initialize all members of a structure to zero?                ",
        options: [' <samp>struct MyStruct x = {0};</samp>', ' <samp>struct MyStruct x = 0;</samp>', ' <samp>struct MyStruct x(0);</samp>', ' <samp>struct MyStruct x = {0, 0, 0};</samp>'],
        answer: "A.struct MyStruct x = {0};",
        explanation: " Initializing the first member to zero will automatically initialize all other members to zero.    "
    },
    {
        question: " Given the structure:                ",
        options: [' <samp>struct Rectangle r = {15, 10};</samp>', ' <samp>struct Rectangle r = (15, 10);</samp>', ' <samp>struct Rectangle r(15, 10);</samp>', ' <samp>struct Rectangle r = {15, 10, 0};</samp>'],
        answer: "A.struct Rectangle r = {15, 10};",
        explanation: " Values 15 and 10 correspond to <samp>length</samp> and <samp>breadth</samp> respectively in the initializer list.    "
    },
    {
        question: " What happens if you partially initialize a structure?                ",
        options: [' The uninitialized members are set to zero      ', ' The uninitialized members are set to null      ', ' The uninitialized members retain garbage values      ', ' The code will produce an error    '],
        answer: "A. The uninitialized members are set to zero",
        explanation: " If only some members are initialized, the remaining members are automatically initialized to zero.    "
    },
    {
        question: " Given the structure:                ",
        options: [' <samp>struct Book b = {.pages = 100};</samp>', ' <samp>struct Book b = {100};</samp>', ' <samp>struct Book b = {0, 100, 0.0};</samp>', ' <samp>struct Book b = {100, 0, 0};</samp>'],
        answer: "A.struct Book b = {.pages = 100};",
        explanation: " Designated initializers allow specific members to be initialized while others remain zero or default.    "
    },
    {
        question: " Which of the following is a valid way to initialize a structure with an array member?                ",
        options: [' <samp>struct Data d = {1, 2, 3, 4, 5, 10.5};</samp>', ' <samp>struct Data d = {[0] = 1, [1] = 2, [2] = 3, [3] = 4, [4] = 5, .value = 10.5};</samp>', ' <samp>struct Data d = {.numbers = {1, 2, 3, 4, 5}, .value = 10.5};</samp>', ' All of the above    '],
        answer: "D. All of the above",
        explanation: " All the given methods are valid for initializing an array within a structure along with another member.    "
    },
    {
        question: " What is the effect of the following initialization?                ",
        options: [' Both x and y will be zero      ', ' Both x and y will be garbage values      ', ' x will be 10 and y will be 20      ', ' x will be 20 and y will be 10    '],
        answer: "C. x will be 10 and y will be 20",
        explanation: " Designated initializers set <samp>x</samp> to 10 and <samp>y</samp> to 20 as specified.    "
    },
    {
        question: " Which of the following code snippets initializes a structure with default values using a function?                ",
        options: [' <pre><code>struct Person initPerson() {<br/>struct Person p = {"John Doe", 30};<br/>return p;<br/>}</code></pre>', '<pre><code>void initPerson(struct Person *p) {<br/>*p = (struct Person){"John Doe", 30};<br/>}</code></pre>', ' <pre><code>struct Person p;<br/>initPerson(&amp;p);</code></pre>', ' All of the above    '],
        answer: "D. All of the above",
        explanation: " All methods shown are valid for initializing a structure with default values.    "
    },
    {
        question: " How can you initialize a structure using a compound literal?                ",
        options: [' <samp>struct Point p = (struct Point){10, 20};</samp>', ' <samp>struct Point p = {10, 20};</samp>', ' <samp>struct Point p = struct Point{10, 20};</samp>', ' <samp>struct Point p = (10, 20);</samp>'],
        answer: "A.struct Point p = (struct Point){10, 20};",
        explanation: " Compound literals provide a way to initialize structures on the fly without declaring a new type.    "
    },
    {
        question: " Which of the following is the correct way to define a structure in C?                ",
        options: [' <samp>struct { int x; float y; };</samp>', ' <samp>struct MyStruct { int x; float y; };</samp>', ' <samp>struct MyStruct { int x; float y; }</samp>', ' <samp>struct { int x; float y; } MyStruct;</samp>'],
        answer: "B.struct MyStruct { int x; float y; };",
        explanation: " A structure in C is defined with the <samp>struct</samp> keyword, a tag name, and a body enclosed in braces followed by a semicolon.    "
    },
    {
        question: " How do you declare a variable of a structure type?                ",
        options: [' <samp>struct MyStruct x;</samp>', ' <samp>MyStruct x;</samp>', ' <samp>struct MyStruct x = {10, 20.5};</samp>', ' <samp>All of the above</samp>'],
        answer: "D.All of the above",
        explanation: " Variables of a structure type can be declared using the <samp>struct</samp> keyword or directly if a typedef is used.    "
    },
    {
        question: " What is the correct way to access a member of a structure?                ",
        options: [' <samp>struct_var.member</samp>', ' <samp>struct_var-&gt;member</samp>', ' <samp>struct_var:member</samp>', ' <samp>struct_var|member</samp>'],
        answer: "A.struct_var.member",
        explanation: " The dot operator (<samp>.</samp>) is used to access members of a structure using a structure variable.    "
    },
    {
        question: " How do you define a structure within another structure?                ",
        options: [' <samp>struct Outer { struct Inner { int x; }; int y; };</samp>', ' <samp>struct Outer { int y; struct Inner { int x; }; };</samp>', ' <samp>struct Inner { int x; }; struct Outer { struct Inner inner; int y; };</samp>', ' <samp>struct Outer { struct Inner; int y; }; struct Inner { int x; };</samp>'],
        answer: "C.struct Inner { int x; }; struct Outer { struct Inner inner; int y; };",
        explanation: " Structures can be nested by defining one structure type and then using it as a member of another structure.    "
    },
    {
        question: " What is the purpose of using <samp>typedef</samp> with structures?                ",
        options: [' To create new variables      ', ' To define new data types      ', ' To rename the structure      ', ' To initialize structure members    '],
        answer: "B. To define new data types",
        explanation: " <samp>typedef</samp> is used to create an alias for a data type, making the code more readable and easier to manage.    "
    },
    {
        question: " What will be the output of the following code?                <pre><code>struct Point { int x, y; };<br/>struct Point p1 = {10, 20};<br/>printf('%d, %d', p1.x, p1.y);</code></pre>",
        options: [' <samp>10, 20</samp>', ' <samp>10 20</samp>', ' <samp>Point: 10, 20</samp>', ' Compiler error    '],
        answer: "A.10, 20",
        explanation: " The code initializes a structure variable and accesses its members to print their values.    "
    },
    {
        question: " How do you define an array of structures?                ",
        options: [' <samp>struct MyStruct arr[10];</samp>', ' <samp>struct arr[10] MyStruct;</samp>', ' <samp>MyStruct[10] arr;</samp>', ' <samp>struct arr MyStruct[10];</samp>'],
        answer: "A.struct MyStruct arr[10];",
        explanation: " An array of structures is defined by specifying the structure type followed by the array name and size.    "
    },
    {
        question: " What is the correct way to initialize a structure with default values?                ",
        options: [' <samp>struct MyStruct x = {0};</samp>', ' <samp>struct MyStruct x = {0, 0};</samp>', ' <samp>struct MyStruct x = {0, 0, 0};</samp>', ' <samp>All of the above</samp>'],
        answer: "D.All of the above",
        explanation: " Structures can be initialized with default values by providing an initializer list. Extra members will be initialized to zero by default.    "
    },
    {
        question: " How do you pass a structure to a function?                ",
        options: [' By value      ', ' By reference      ', ' Both A and B      ', ' Structures cannot be passed to functions    '],
        answer: "C. Both A and B",
        explanation: " Structures can be passed to functions either by value or by reference (using pointers).    "
    },
    {
        question: " Which of the following statements about structures is false?                ",
        options: [' Structures can contain members of different data types      ', ' Structures can be passed to functions      ', ' Structures can only be defined inside functions      ', ' Structures can be nested    '],
        answer: "C. Structures can only be defined inside functions",
        explanation: " Structures can be defined globally, inside functions, or even within other structures.    "
    },
    {
        question: " What is the purpose of the following custom function?<pre><code>int custom_strlen(char *str) {<br/>int length = 0;<br/>while (str[length] != '\0') {<br/>length++;<br/>}<br/>return length;<br/>}</code></pre>",
        options: [' To compare two strings  ', ' To copy one string to another  ', ' To find the length of a string  ', ' To concatenate two strings'],
        answer: "C. To find the length of a string",
        explanation: " This function calculates the length of the string by counting characters until the null terminator is encountered."
    },
    {
        question: " How does the following custom <samp>strcpy</samp> function work?<pre><code>void custom_strcpy(char *dest, char *src) {<br/>while (*src != '\0') {<br/>*dest = *src;<br/>src++;<br/>dest++;<br/>}<br/>*dest = '\0';<br/>}</code></pre>",
        options: [' It appends <samp>src</samp> to <samp>dest</samp>', ' It copies <samp>src</samp> into <samp>dest</samp>', ' It compares <samp>src</samp> with <samp>dest</samp>', ' It reverses <samp>src</samp> and stores in <samp>dest</samp>'],
        answer: "B. It copiessrcintodest",
        explanation: " This function copies each character from the source string to the destination string, including the null terminator."
    },
    {
        question: " Which function is being implemented by the following code?<pre><code>void custom_strcat(char *dest, char *src) {<br/>while (*dest != '\0') {<br/>dest++;<br/>}<br/>while (*src != '\0') {<br/>*dest = *src;<br/>src++;<br/>dest++;<br/>}<br/>*dest = '\0';<br/>}</code></pre>",
        options: [' String comparison  ', ' String copying  ', ' String concatenation  ', ' String length calculation'],
        answer: "C. String concatenation",
        explanation: " This function appends the source string to the destination string."
    },
    {
        question: " What does the following custom <samp>strcmp</samp> function do?<pre><code>int custom_strcmp(char *str1, char *str2) {<br/>while (*str1 &amp;&amp; (*str1 == *str2)) {<br/>str1++;<br/>str2++;<br/>}<br/>return *(unsigned char *)str1 - *(unsigned char *)str2;<br/>}</code></pre>",
        options: [' It appends <samp>str2</samp> to <samp>str1</samp>', ' It compares <samp>str1</samp> and <samp>str2</samp>', ' It copies <samp>str2</samp> into <samp>str1</samp>', ' It finds the length of <samp>str1</samp>'],
        answer: "B. It comparesstr1andstr2",
        explanation: " This function compares two strings lexicographically and returns the difference of the first unmatched character."
    },
    {
        question: " What will be the output of the following code using the custom <samp>strlen</samp> function?<pre><code>char str[] = 'Hello, World!';<br/>int len = custom_strlen(str);<br/>printf('%d', len);</code></pre>",
        options: [' 12  ', ' 13  ', ' 14  ', ' 15'],
        answer: "B. 13",
        explanation: " The function calculates the length of 'Hello, World!', which is 13 characters."
    },
    {
        question: " How does the custom <samp>strcpy</samp> function handle the null character?",
        options: [' It ignores the null character  ', ' It includes the null character in the destination string  ', ' It replaces the null character with a space  ', ' It returns the null character'],
        answer: "B. It includes the null character in the destination string",
        explanation: " The function copies the null character to the destination string to ensure it is properly terminated."
    },
    {
        question: " What will be the result of the following code using the custom <samp>strcat</samp> function?<pre><code>char dest[20] = 'Hello';<br/>char src[] = ' World';<br/>custom_strcat(dest, src);<br/>printf('%s', dest);</code></pre>",
        options: [' <samp>Hello</samp>', ' <samp>World</samp>', ' <samp>Hello World</samp>', ' <samp>HelloWorld</samp>'],
        answer: "C.Hello World",
        explanation: " The function appends ' World' to 'Hello', resulting in 'Hello World'."
    },
    {
        question: " What value does the custom <samp>strcmp</samp> function return if <samp>str1</samp> is 'abc' and <samp>str2</samp> is 'abd'?",
        options: [' 0  ', ' A positive value  ', ' A negative value  ', ' The length of <samp>str1</samp>'],
        answer: "C. A negative value",
        explanation: " The function returns a negative value because 'c' is less than 'd' in ASCII."
    },
    {
        question: " Which of the following statements is true about the custom <samp>strlen</samp> function?",
        options: [' It counts the null character  ', ' It does not count the null character  ', ' It returns the length of the array  ', ' It returns a pointer to the string'],
        answer: "B. It does not count the null character",
        explanation: " The function calculates the length of the string without counting the null terminator."
    },
    {
        question: " What is the purpose of the following code using the custom <samp>strcpy</samp> function?<pre><code>char src[] = 'C Programming';<br/>char dest[20];<br/>custom_strcpy(dest, src);<br/>printf('%s', dest);</code></pre>",
        options: [' To concatenate <samp>src</samp> with <samp>dest</samp>', ' To copy <samp>src</samp> into <samp>dest</samp>', ' To compare <samp>src</samp> and <samp>dest</samp>', ' To find the length of <samp>src</samp>'],
        answer: "B. To copysrcintodest",
        explanation: " The function copies the content of <samp>src</samp> into <samp>dest</samp>, resulting in 'C Programming'."
    },
    {
        question: " What does the <samp>strlen</samp> function return?",
        options: [' The size of the string array  ', ' The number of characters in the string, excluding the null character  ', ' The number of characters in the string, including the null character  ', ' The length of the string multiplied by the size of each character'],
        answer: "B. The number of characters in the string, excluding the null character",
        explanation: " <samp>strlen</samp> returns the length of the string, not counting the null terminator."
    },
    {
        question: " What is the correct syntax to use <samp>strcpy</samp> to copy a string <samp>src</samp> into <samp>dest</samp>?",
        options: [' <samp>strcpy(src, dest);</samp>', ' <samp>strcpy(dest, src);</samp>', ' <samp>strcpy(&amp;src, &amp;dest);</samp>', ' <samp>strcpy(*src, *dest);</samp>'],
        answer: "B.strcpy(dest, src);",
        explanation: " <samp>strcpy</samp> copies the string <samp>src</samp> into <samp>dest</samp>."
    },
    {
        question: " What does the <samp>strcat</samp> function do?",
        options: [' It compares two strings  ', ' It concatenates two strings  ', ' It calculates the length of a string  ', ' It copies one string into another'],
        answer: "B. It concatenates two strings",
        explanation: " <samp>strcat</samp> appends the source string to the destination string."
    },
    {
        question: " How does the <samp>strcmp</samp> function indicate that two strings are equal?",
        options: [' It returns 1  ', ' It returns 0  ', ' It returns the length of the strings  ', ' It returns -1'],
        answer: "B. It returns 0",
        explanation: " <samp>strcmp</samp> returns 0 if the two strings are identical."
    },
    {
        question: " What will be the output of the following code?<pre><code>char str1[] = 'Hello';<br/>char str2[10];<br/>strcpy(str2, str1);<br/>printf('%s', str2);</code></pre>",
        options: [' <samp>Hello</samp>', ' <samp>str1</samp>', ' <samp>str2</samp>', ' Compiler error'],
        answer: "A.Hello",
        explanation: " <samp>strcpy</samp> copies the content of <samp>str1</samp> to <samp>str2</samp>, so <samp>str2</samp> contains 'Hello'."
    },
    {
        question: " What is the purpose of the <samp>strlen</samp> function in the following code?<pre><code>char str[] = 'World';<br/>int length = strlen(str);<br/>printf('%d', length);</code></pre>",
        options: [' To copy the string  ', ' To compare the string with another string  ', ' To calculate the length of the string  ', ' To concatenate the string with another string'],
        answer: "C. To calculate the length of the string",
        explanation: " <samp>strlen</samp> calculates and returns the length of <samp>str</samp>, which is 5."
    },
    {
        question: " What will be the result of the following code?<pre><code>char str1[20] = 'Hello';<br/>char str2[] = 'World';<br/>strcat(str1, str2);<br/>printf('%s', str1);</code></pre>",
        options: [' <samp>Hello</samp>', ' <samp>World</samp>', ' <samp>HelloWorld</samp>', ' <samp>Hello World</samp>'],
        answer: "C.HelloWorld",
        explanation: " <samp>strcat</samp> appends <samp>str2</samp> to <samp>str1</samp>, resulting in 'HelloWorld'."
    },
    {
        question: " How does the <samp>strcmp</samp> function behave if <samp>str1</samp> is lexicographically less than <samp>str2</samp>?",
        options: [' It returns 0  ', ' It returns a positive value  ', ' It returns a negative value  ', ' It returns the length of <samp>str1</samp>'],
        answer: "C. It returns a negative value",
        explanation: " <samp>strcmp</samp> returns a negative value if <samp>str1</samp> is less than <samp>str2</samp>."
    },
    {
        question: " What is the output of the following code?<pre><code>char str1[] = 'abc';<br/>char str2[] = 'ABC';<br/>int result = strcmp(str1, str2);<br/>printf('%d', result);</code></pre>",
        options: [' A positive value  ', ' A negative value  ', ' 0  ', ' Compiler error'],
        answer: "A. A positive value",
        explanation: " <samp>strcmp</samp> returns a positive value because 'a' is greater than 'A' in ASCII."
    },
    {
        question: " Which of the following statements is true about <samp>strcat</samp>?",
        options: [' It compares two strings  ', ' It copies one string into another  ', ' It appends one string to the end of another string  ', ' It returns the length of a string'],
        answer: "C. It appends one string to the end of another string",
        explanation: " <samp>strcat</samp> appends the source string to the destination string."
    },
    {
        question: " How do you declare a string in C?",
        options: [' <samp>char str[];</samp>', ' <samp>char str;</samp>', ' <samp>char *str;</samp>', ' <samp>char str[20];</samp>'],
        answer: "D.char str[20];",
        explanation: " A string in C is declared as an array of characters with a specified size."
    },
    {
        question: " Which of the following is the correct way to initialize a string in C?",
        options: [' <samp>char str[] = "Hello";</samp>', ' <samp>char str[] = "Hello";</samp>', ' <samp>char str = "Hello";</samp>', ' <samp>char *str = "Hello";</samp>'],
        answer: "B.char str[] = 'Hello';",
        explanation: " Double quotes are used to initialize a string, which is an array of characters."
    },
    {
        question: " What is the value of the null character that terminates a string in C?",
        options: [' <samp>0</samp>', ' <samp>\\0</samp>', ' <samp>\\n</samp>', ' <samp>\\t</samp>'],
        answer: "B.\0",
        explanation: " The null character <samp>\0</samp> is used to mark the end of a string in C."
    },
    {
        question: " Given the declaration <samp>char str[10];</samp>, which of the following initializes the string with the word 'CProg'?",
        options: [' <samp>str = "CProg";</samp>', ' <samp>str[10] = "CProg";</samp>', ' <samp>str[] = "CProg";</samp>', ' <samp>strcpy(str, "CProg");</samp>'],
        answer: "D.strcpy(str, 'CProg');",
        explanation: " The <samp>strcpy</samp> function is used to copy the string 'CProg' into <samp>str</samp>."
    },
    {
        question: " How do you declare a pointer to a string in C?",
        options: [' <samp>char str*;</samp>', ' <samp>char *str;</samp>', ' <samp>char str[20];</samp>', ' <samp>char str[];</samp>'],
        answer: "B.char *str;",
        explanation: " <samp>char *str</samp> declares a pointer to a string (character array) in C."
    },
    {
        question: " What will be the output of the following code?",
        options: [' <samp>Hello, World!</samp>', ' <samp>Hello</samp>', ' <samp>World!</samp>', ' <samp>Hello,</samp>'],
        answer: "A.Hello, World!",
        explanation: " The <samp>printf</samp> function with the <samp>%s</samp> format specifier prints the entire string until the null character."
    },
    {
        question: " Which function is used to find the length of a string in C?",
        options: [' <samp>strlen()</samp>', ' <samp>strcpy()</samp>', ' <samp>strcat()</samp>', ' <samp>strcmp()</samp>'],
        answer: "A.strlen()",
        explanation: " The <samp>strlen</samp> function returns the length of a string, excluding the null character."
    },
    {
        question: " How do you initialize a string with a predefined length and content?",
        options: [' <samp>char str[10] = "Hello";</samp>', ' <samp>char str[10] = "Hello";</samp>', ' <samp>char str = "Hello";</samp>', ' <samp>char str* = "Hello";</samp>'],
        answer: "B.char str[10] = 'Hello';",
        explanation: " The array is declared with a length of 10 and initialized with the string 'Hello'."
    },
    {
        question: " What will be the output of the following code?",
        options: [' <samp>H</samp>', ' <samp>e</samp>', ' <samp>l</samp>', ' <samp>o</samp>'],
        answer: "B.e",
        explanation: " <samp>str[1]</samp> accesses the second character of the string, which is 'e'."
    },
    {
        question: " Which of the following is true about string initialization in C?",
        options: [' Strings can only be initialized at the time of declaration  ', ' Strings cannot be re-assigned after initialization  ', ' Strings can be initialized using character arrays or pointers  ', ' Strings do not require a null character'],
        answer: "C. Strings can be initialized using character arrays or pointers",
        explanation: " Strings in C can be initialized using both character arrays and pointers."
    },
    {
        question: " What is the main advantage of passing arguments to functions by pointer?",
        options: [' It allows passing of multiple arguments  ', ' It enables the function to modify the original variables  ', ' It simplifies the code  ', ' It prevents the function from modifying the original variables'],
        answer: "B. It enables the function to modify the original variables",
        explanation: " Passing by pointer allows the function to directly access and modify the original variables."
    },
    {
        question: " Which of the following correctly passes an integer variable <samp>x</samp> to a function <samp>func</samp> using a pointer?",
        options: [' <samp>func(x);</samp>', ' <samp>func(&amp;x);</samp>', ' <samp>func(*x);</samp>', ' <samp>func(x*);</samp>'],
        answer: "B.func(&x);",
        explanation: " The address of the variable <samp>x</samp> is passed to the function using <samp>&amp;x</samp>."
    },
    {
        question: " Given the following function declaration, how do you call the function to swap two integer values?<pre><code>void swap(int *a, int *b);</code></pre>",
        options: [' <samp>swap(&amp;a, &amp;b);</samp>', ' <samp>swap(a, b);</samp>', ' <samp>swap(*a, *b);</samp>', ' <samp>swap(a&amp;, b&amp;);</samp>'],
        answer: "A.swap(&a, &b);",
        explanation: " The addresses of the variables are passed to the function so it can swap the values."
    },
    {
        question: " What will be the output of the following code?<pre><code>void change(int *p) {<br/>*p = 10;<br/>}<br/>int main() {<br/>int x = 5;<br/>change(&amp;x);<br/>printf('%d', x);<br/>return 0;<br/>}</code></pre>",
        options: [' 5  ', ' 10  ', ' 0  ', ' Compiler error'],
        answer: "B. 10",
        explanation: " The function <samp>change</samp> modifies the value of <samp>x</samp> through the pointer, setting it to 10."
    },
    {
        question: " What is the correct way to declare a function that returns a pointer to an integer?",
        options: [' <samp>int *func();</samp>', ' <samp>int &amp;func();</samp>', ' <samp>int func*();</samp>', ' <samp>int func();</samp>'],
        answer: "A.int *func();",
        explanation: " The correct syntax for a function returning a pointer to an integer is <samp>int *func();</samp>."
    },
    {
        question: " How do you pass an array to a function so that the function can modify the array elements?",
        options: [' By passing the array itself  ', ' By passing the size of the array  ', ' By passing a pointer to the array  ', ' By passing each element individually'],
        answer: "C. By passing a pointer to the array",
        explanation: " Passing a pointer to the array allows the function to modify the array elements."
    },
    {
        question: " What will be the output of the following code?<pre><code>void add(int *a, int *b, int *result) {<br/>*result = *a + *b;<br/>}<br/>int main() {<br/>int x = 2, y = 3, z;<br/>add(&amp;x, &amp;y, &amp;z);<br/>printf('%d', z);<br/>return 0;<br/>}</code></pre>",
        options: [' 2  ', ' 3  ', ' 5  ', ' Compiler error'],
        answer: "C. 5",
        explanation: " The function <samp>add</samp> computes the sum of <samp>x</samp> and <samp>y</samp> and stores it in <samp>z</samp> through the pointer <samp>result</samp>."
    },
    {
        question: " In the following code, what does <samp>*ptr = 25;</samp> do inside the function <samp>modify</samp>?<pre><code>void modify(int *ptr) {<br/>*ptr = 25;<br/>}<br/>int main() {<br/>int num = 10;<br/>modify(#);<br/>printf('%d', num);<br/>return 0;<br/>}</code></pre>",
        options: [' Sets <samp>ptr</samp> to 25  ', ' Sets <samp>num</samp> to 25  ', ' Does nothing  ', ' Causes a compile-time error'],
        answer: "B. Setsnumto 25",
        explanation: " The function <samp>modify</samp> changes the value of <samp>num</samp> through the pointer <samp>ptr</samp>."
    },
    {
        question: " Which of the following statements about pointers and functions is true?",
        options: [' Pointers cannot be used to return multiple values from a function  ', ' Pointers can only be used to pass arrays to functions  ', ' Pointers allow functions to return multiple values by modifying variables directly  ', ' Pointers cannot be used with functions'],
        answer: "C. Pointers allow functions to return multiple values by modifying variables directly",
        explanation: " Pointers enable functions to modify multiple variables, effectively allowing them to return multiple values."
    },
    {
        question: " What will be the result of the following code?<pre><code>void increment(int *p) {<br/>(*p)++;<br/>}<br/>int main() {<br/>int value = 5;<br/>increment(&amp;value);<br/>printf('%d', value);<br/>return 0;<br/>}</code></pre>",
        options: [' 4  ', ' 5  ', ' 6  ', ' Compiler error'],
        answer: "C. 6",
        explanation: " The function <samp>increment</samp> increases the value of <samp>value</samp> by 1 through the pointer <samp>p</samp>."
    },
    {
        question: " What does the expression <samp>arr[3]</samp> in an array <samp>arr</samp> translate to using pointers?",
        options: [' <samp>*(arr + 3)</samp>', ' <samp>*(arr + 2)</samp>', ' <samp>*(arr + 4)</samp>', ' <samp>*(arr + 1)</samp>'],
        answer: "A.*(arr + 3)",
        explanation: " The expression <samp>arr[3]</samp> is equivalent to <samp>*(arr + 3)</samp>, accessing the element at the 3rd index of the array."
    },
    {
        question: " Given the array declaration <samp>int arr[5];</samp>, what does the name <samp>arr</samp> represent?",
        options: [' The address of the first element of the array  ', ' The address of the last element of the array  ', ' The value of the first element of the array  ', ' The value of the last element of the array'],
        answer: "A. The address of the first element of the array",
        explanation: " In C, the name of the array represents the address of its first element."
    },
    {
        question: " How do you pass an array to a function in C?",
        options: [' By passing the entire array  ', ' By passing a pointer to the first element of the array  ', ' By passing the size of the array  ', ' By passing the array"s data type'],
        answer: "B. By passing a pointer to the first element of the array",
        explanation: " When passing an array to a function, you actually pass a pointer to its first element."
    },
    {
        question: " What is the result of the following code?<pre><code>int arr[] = {10, 20, 30, 40, 50};<br/>int *ptr = arr;<br/>printf('%d', *(ptr + 3));</code></pre>",
        options: [' 10  ', ' 20  ', ' 30  ', ' 40'],
        answer: "D. 40",
        explanation: " <samp>*(ptr + 3)</samp> accesses the 4th element (index 3) of the array <samp>arr</samp>, which is 40."
    },
    {
        question: " Which statement correctly assigns the address of the second element of the array <samp>arr</samp> to a pointer <samp>ptr</samp>?",
        options: [' <samp>ptr = arr;</samp>', ' <samp>ptr = &amp;arr[1];</samp>', ' <samp>ptr = arr + 1;</samp>', ' Both B and C'],
        answer: "D. Both B and C",
        explanation: " Both <samp>&amp;arr[1]</samp> and <samp>arr + 1</samp> give the address of the second element of the array <samp>arr</samp>."
    },
    {
        question: " Given the declaration <samp>int arr[5];</samp>, how do you access the third element using a pointer?",
        options: [' <samp>*(arr + 2)</samp>', ' <samp>*(arr + 3)</samp>', ' <samp>*(arr + 4)</samp>', ' <samp>*(arr + 5)</samp>'],
        answer: "A.*(arr + 2)",
        explanation: " <samp>*(arr + 2)</samp> accesses the third element of the array <samp>arr</samp>."
    },
    {
        question: " What will be the output of the following code?<pre><code>int arr[] = {5, 10, 15, 20, 25};<br/>int *ptr = arr + 2;<br/>printf('%d', *ptr);</code></pre>",
        options: [' 5  ', ' 10  ', ' 15  ', ' 20'],
        answer: "C. 15",
        explanation: " <samp>arr + 2</samp> points to the third element of the array, which is 15."
    },
    {
        question: " How do you declare a pointer to an array of 10 integers?",
        options: [' <samp>int *arr[10];</samp>', ' <samp>int (*arr)[10];</samp>', ' <samp>int arr* = 10;</samp>', ' <samp>int (arr)[10];</samp>'],
        answer: "B.int (*arr)[10];",
        explanation: " <samp>int (*arr)[10]</samp> declares a pointer to an array of 10 integers."
    },
    {
        question: " Which of the following is true about the relationship between arrays and pointers in C?",
        options: [' An array name is a pointer constant  ', ' You cannot use pointer arithmetic with arrays  ', ' Pointers and arrays are completely unrelated  ', ' Arrays cannot be passed to functions'],
        answer: "A. An array name is a pointer constant",
        explanation: " An array name in C acts as a constant pointer to the first element of the array."
    },
    {
        question: " What does the expression <samp>ptr = arr</samp> do if <samp>ptr</samp> is a pointer to an integer and <samp>arr</samp> is an array of integers?",
        options: [' Assigns the value of the first element of <samp>arr</samp> to <samp>ptr</samp>', ' Assigns the address of the first element of <samp>arr</samp> to <samp>ptr</samp>', ' Causes a compile-time error  ', ' Assigns the size of the array to <samp>ptr</samp>'],
        answer: "B. Assigns the address of the first element ofarrtoptr",
        explanation: " <samp>ptr = arr</samp> assigns the address of the first element of the array <samp>arr</samp> to the pointer <samp>ptr</samp>."
    },
    {
        question: " Which library function is used to dynamically allocate memory in C?",
        options: [' <samp>malloc</samp>', ' <samp>alloc</samp>', ' <samp>memalloc</samp>', ' <samp>memallocate</samp>'],
        answer: "A.malloc",
        explanation: " The <samp>malloc</samp> function is used to allocate a block of memory dynamically in C."
    },
    {
        question: " What does the <samp>calloc</samp> function do in C?",
        options: [' Allocates a block of memory and initializes it to zero  ', ' Allocates a block of memory without initialization  ', ' Frees a block of allocated memory  ', ' Resizes a previously allocated block of memory'],
        answer: "A. Allocates a block of memory and initializes it to zero",
        explanation: " The <samp>calloc</samp> function allocates memory and initializes all bits to zero."
    },
    {
        question: " How do you deallocate memory allocated by <samp>malloc</samp> in C?",
        options: [' <samp>dealloc(ptr);</samp>', ' <samp>free(ptr);</samp>', ' <samp>delete(ptr);</samp>', ' <samp>remove(ptr);</samp>'],
        answer: "B.free(ptr);",
        explanation: " The <samp>free</samp> function is used to deallocate memory previously allocated by <samp>malloc</samp> or <samp>calloc</samp>."
    },
    {
        question: " What will happen if you forget to free dynamically allocated memory in C?",
        options: [' The program will crash  ', ' The operating system will automatically free the memory  ', ' It will lead to a memory leak  ', ' The program will not compile'],
        answer: "C. It will lead to a memory leak",
        explanation: " Forgetting to free dynamically allocated memory results in a memory leak, where allocated memory is no longer accessible."
    },
    {
        question: " How do you dynamically allocate an array of 10 integers using <samp>malloc</samp>?",
        options: [' <samp>int *arr = malloc(10);</samp>', ' <samp>int *arr = malloc(10 * sizeof(int));</samp>', ' <samp>int *arr = malloc(10 * sizeof(arr));</samp>', ' <samp>int *arr = malloc(sizeof(int));</samp>'],
        answer: "B.int *arr = malloc(10 * sizeof(int));",
        explanation: " The correct syntax to allocate an array of 10 integers is <samp>malloc(10 * sizeof(int))</samp>."
    },
    {
        question: " What is the purpose of the <samp>realloc</samp> function in C?",
        options: [' To allocate a new block of memory  ', ' To deallocate a block of memory  ', ' To resize a previously allocated block of memory  ', ' To initialize a block of memory'],
        answer: "C. To resize a previously allocated block of memory",
        explanation: " The <samp>realloc</samp> function is used to change the size of a previously allocated memory block."
    },
    {
        question: " What does the following code do?<pre><code>int *ptr = (int *)malloc(5 * sizeof(int));</code></pre>",
        options: [' Allocates memory for 5 integers and returns a pointer to the first element  ', ' Allocates memory for 5 characters and returns a pointer to the first element  ', ' Allocates memory for 5 integers without initializing  ', ' Both A and C'],
        answer: "D. Both A and C",
        explanation: " The code allocates memory for 5 integers and returns a pointer to the first element. The memory is not initialized."
    },
    {
        question: " What is the correct way to free dynamically allocated memory for a 2D array?",
        options: [' <samp>free(arr);</samp>', ' <samp>free(*arr);</samp>', ' <samp>for (int i = 0; i &lt; rows; i++) free(arr[i]);</samp>', ' <samp>free(arr[0]);</samp>'],
        answer: "C.for (int i = 0; i < rows; i++) free(arr[i]);",
        explanation: " Each row of the 2D array needs to be freed individually before freeing the array of row pointers."
    },
    {
        question: " How do you allocate memory for a single <samp>float</samp> variable using <samp>calloc</samp>?",
        options: [' <samp>float *ptr = calloc(1, sizeof(float));</samp>', ' <samp>float *ptr = calloc(sizeof(float));</samp>', ' <samp>float *ptr = calloc(float);</samp>', ' <samp>float *ptr = calloc(1, float);</samp>'],
        answer: "A.float *ptr = calloc(1, sizeof(float));",
        explanation: " The <samp>calloc</samp> function takes two arguments: the number of elements and the size of each element."
    },
    {
        question: " What will be the output of the following code?<pre><code>int *ptr = (int *)malloc(sizeof(int));<br/>*ptr = 100;<br/>printf('%d', *ptr);<br/>free(ptr);</code></pre>",
        options: [' 100  ', ' 0  ', ' The address of <samp>ptr</samp>', ' Undefined behavior'],
        answer: "A. 100",
        explanation: " The <samp>malloc</samp> function allocates memory for one integer, the value 100 is stored in that memory, and then it is printed. The memory is freed afterward."
    },
    {
        question: " What does the expression <samp>ptr + 1</samp> do if <samp>ptr</samp> is an integer pointer in C?",
        options: [' Increments <samp>ptr</samp> by 1 byte  ', ' Increments <samp>ptr</samp> by 2 bytes  ', ' Increments <samp>ptr</samp> by 4 bytes  ', ' Increments <samp>ptr</samp> by the size of the integer type'],
        answer: "D. Incrementsptrby the size of the integer type",
        explanation: " When performing pointer arithmetic, adding 1 to a pointer of type <samp>int</samp> increments the pointer by the size of an <samp>int</samp> (typically 4 bytes)."
    },
    {
        question: " If <samp>ptr</samp> is a pointer to a double and it has the address 1000, what will be the address after <samp>ptr++</samp>?",
        options: [' 1001  ', ' 1002  ', ' 1008  ', ' 1004'],
        answer: "C. 1008",
        explanation: " A <samp>double</samp> typically occupies 8 bytes, so incrementing a pointer to a <samp>double</samp> by 1 will increase its address by 8 bytes."
    },
    {
        question: " What is the result of subtracting two pointers <samp>p1</samp> and <samp>p2</samp> that point to elements of the same array?",
        options: [' The number of bytes between <samp>p1</samp> and <samp>p2</samp>', ' The difference in the number of elements between <samp>p1</samp> and <samp>p2</samp>', ' A pointer to the difference between the addresses of <samp>p1</samp> and <samp>p2</samp>', ' A syntax error'],
        answer: "B. The difference in the number of elements betweenp1andp2",
        explanation: " Subtracting two pointers that point to elements of the same array gives the number of elements between them."
    },
    {
        question: " Given the following code, what is the value of <samp>*(ptr + 2)</samp>?<pre><code>int arr[] = {10, 20, 30, 40};<br/>int *ptr = arr;</code></pre>",
        options: [' <samp>10</samp>', ' <samp>20</samp>', ' <samp>30</samp>', ' <samp>40</samp>'],
        answer: "C.30",
        explanation: " <samp>*(ptr + 2)</samp> accesses the element at index 2 of the array, which is 30."
    },
    {
        question: " What does the expression <samp>ptr - 3</samp> do if <samp>ptr</samp> is a pointer to an integer in C?",
        options: [' Decrements <samp>ptr</samp> by 3 bytes  ', ' Decrements <samp>ptr</samp> by 3 elements  ', ' Decrements <samp>ptr</samp> by the size of an integer type times 3  ', ' A and C'],
        answer: "D. A and C",
        explanation: " <samp>ptr - 3</samp> decreases the address stored in <samp>ptr</samp> by the size of the integer type times 3."
    },
    {
        question: " If <samp>char *p = 'Hello';</samp> what does <samp>*(p + 4)</samp> return?",
        options: [' <samp>H</samp>', ' <samp>e</samp>', ' <samp>l</samp>', ' <samp>o</samp>'],
        answer: "D.o",
        explanation: " <samp>*(p + 4)</samp> accesses the character at index 4 of the string 'Hello', which is <samp>o</samp>."
    },
    {
        question: " What happens when you perform <samp>++ptr</samp> on a pointer <samp>ptr</samp> that points to the first element of an array?",
        options: [' The pointer moves to the next element of the array  ', ' The value of the first element of the array is incremented  ', ' The pointer moves to the previous element of the array  ', ' The value of the first element of the array is decremented'],
        answer: "A. The pointer moves to the next element of the array",
        explanation: " <samp>++ptr</samp> moves the pointer to the next element in the array."
    },
    {
        question: " Given the following code, what will be the value of <samp>ptr - arr</samp>?<pre><code>int arr[] = {1, 2, 3, 4, 5};<br/>int *ptr = &amp;arr[3];</code></pre>",
        options: [' <samp>3</samp>', ' <samp>4</samp>', ' The memory address difference between <samp>ptr</samp> and <samp>arr</samp>', ' Undefined'],
        answer: "A.3",
        explanation: " <samp>ptr - arr</samp> gives the number of elements between the address pointed to by <samp>ptr</samp> and the start of the array <samp>arr</samp>, which is 3."
    },
    {
        question: " If <samp>int *p1</samp> and <samp>int *p2</samp> point to elements of the same array and <samp>p1 &lt; p2</samp>, what can be said about the relationship between <samp>p1</samp> and <samp>p2</samp>?",
        options: [' <samp>p1</samp> points to a higher memory address than <samp>p2</samp>', ' <samp>p1</samp> points to a lower memory address than <samp>p2</samp>', ' <samp>p1</samp> and <samp>p2</samp> point to the same memory address  ', ' <samp>p1</samp> is not comparable to <samp>p2</samp>'],
        answer: "B.p1points to a lower memory address thanp2",
        explanation: " If <samp>p1 &lt; p2</samp>, it means <samp>p1</samp> points to an earlier element in the array, thus a lower memory address than <samp>p2</samp>."
    },
    {
        question: " What will be the result of <samp>*(ptr + 3) = 50</samp> if <samp>ptr</samp> is a pointer to the first element of an integer array <samp>arr</samp>?",
        options: [' The first element of <samp>arr</samp> is set to 50  ', ' The third element of <samp>arr</samp> is set to 50  ', ' The fourth element of <samp>arr</samp> is set to 50  ', ' The array <samp>arr</samp> is cleared'],
        answer: "C. The fourth element ofarris set to 50",
        explanation: " <samp>*(ptr + 3) = 50</samp> sets the value of the element at index 3 (the fourth element) of the array <samp>arr</samp> to 50."
    },
    {
        question: " What is the address-of operator in C?",
        options: [' <samp>*</samp>', ' <samp>&amp;</samp>', ' <samp>#</samp>', ' <samp>@</samp>'],
        answer: "B.&",
        explanation: " The address-of operator (<samp>&amp;</samp>) is used to obtain the memory address of a variable."
    },
    {
        question: " What does the indirection operator (<samp>*</samp>) do in C?",
        options: [' It adds two pointers  ', ' It multiplies two numbers  ', ' It accesses the value stored at the memory address of a pointer  ', ' It increments the pointer value'],
        answer: "C. It accesses the value stored at the memory address of a pointer",
        explanation: " The indirection operator (<samp>*</samp>) is used to dereference a pointer, which means accessing the value stored at the memory address the pointer points to."
    },
    {
        question: " Which of the following correctly obtains the address of the variable <samp>x</samp>?",
        options: [' <samp>address = &amp;x</samp>', ' <samp>address = *x;</samp>', ' <samp>address = x;</samp>', ' <samp>address = @x;</samp>'],
        answer: "A.address = &x",
        explanation: " The address-of operator (<samp>&amp;</samp>) is used to obtain the address of the variable <samp>x</samp>."
    },
    {
        question: " Given the code snippet, what is the output?<pre><code>int x = 5;<br/>int *p = &amp;x<br/>printf('%d', *p);</code></pre>",
        options: [' <samp>5</samp>', ' The address of <samp>x</samp>', ' <samp>0</samp>', ' <samp>1</samp>'],
        answer: "A.5",
        explanation: " The pointer <samp>p</samp> stores the address of <samp>x</samp>, and <samp>*p</samp> dereferences the pointer to access the value of <samp>x</samp>, which is 5."
    },
    {
        question: " What is the purpose of the following code?<pre><code>int a = 10;<br/>int *ptr = &amp;a<br/>*ptr = 20;</code></pre>",
        options: [' To change the value of <samp>a</samp> to 10  ', ' To change the value of <samp>a</samp> to 20  ', ' To change the address stored in <samp>ptr</samp>', ' To print the value of <samp>a</samp>'],
        answer: "B. To change the value ofato 20",
        explanation: " The pointer <samp>ptr</samp> stores the address of <samp>a</samp>, and <samp>*ptr = 20</samp> changes the value of <samp>a</samp> to 20."
    },
    {
        question: " What will be the output of the following code?<pre><code>int a = 5;<br/>int b = 10;<br/>int *p = &amp;a<br/>int *q = &amp;b<br/>printf('%d', *p + *q);</code></pre>",
        options: [' <samp>5</samp>', ' <samp>10</samp>', ' <samp>15</samp>', ' The address of <samp>a</samp> and <samp>b</samp>'],
        answer: "C.15",
        explanation: " The pointers <samp>p</samp> and <samp>q</samp> store the addresses of <samp>a</samp> and <samp>b</samp>, respectively. <samp>*p</samp> dereferences <samp>p</samp> to get the value of <samp>a</samp> (5), and <samp>*q</samp> dereferences <samp>q</samp> to get the value of <samp>b</samp> (10). The sum is 15."
    },
    {
        question: " Which of the following statements correctly assigns the address of an integer variable <samp>x</samp> to a pointer <samp>p</samp>?",
        options: [' <samp>p = x;</samp>', ' <samp>*p = &amp;x</samp>', ' <samp>p = &amp;x</samp>', ' <samp>*p = x;</samp>'],
        answer: "C.p = &x",
        explanation: " The correct way to assign the address of <samp>x</samp> to the pointer <samp>p</samp> is <samp>p = &amp;x</samp>."
    },
    {
        question: " What is the output of the following code?<pre><code>int a = 7;<br/>int *p = &amp;a<br/>printf('%p', (void*)p);</code></pre>",
        options: [' <samp>7</samp>', ' The address of <samp>a</samp>', ' <samp>0</samp>', ' <samp>1</samp>'],
        answer: "B. The address ofa",
        explanation: " The pointer <samp>p</samp> stores the address of <samp>a</samp>, and <samp>printf('%p', (void*)p)</samp> prints the address stored in <samp>p</samp>."
    },
    {
        question: " How do you declare a pointer to a float and initialize it with the address of a float variable <samp>f</samp>?",
        options: [' <samp>float *p = f;</samp>', ' <samp>float *p = &amp;f</samp>', ' <samp>*float p = f;</samp>', ' <samp>float p* = &amp;f</samp>'],
        answer: "B.float *p = &f",
        explanation: " The address of the variable <samp>f</samp> is obtained using the <samp>&amp;</samp> operator, and it is assigned to the pointer <samp>p</samp>."
    },
    {
        question: " What is the difference between <samp>&amp;</samp> and <samp>*</samp> in C?",
        options: [' <samp>&amp;</samp> is used for dereferencing a pointer, <samp>*</samp> is used for obtaining the address  ', ' <samp>&amp;</samp> is used for obtaining the address, <samp>*</samp> is used for dereferencing a pointer  ', ' Both are used for obtaining the address  ', ' Both are used for dereferencing a pointer'],
        answer: "B.&is used for obtaining the address,*is used for dereferencing a pointer",
        explanation: " The address-of operator (<samp>&amp;</samp>) is used to obtain the memory address of a variable, and the indirection operator (<samp>*</samp>) is used to dereference a pointer to access the value stored at that address."
    },
    {
        question: " What is a pointer in C programming?",
        options: [' A variable that stores data  ', ' A variable that stores the address of another variable  ', ' A function that returns the address of a variable  ', ' A keyword used to declare variables'],
        answer: "B. A variable that stores the address of another variable",
        explanation: " A pointer is a variable that stores the memory address of another variable."
    },
    {
        question: " How do you declare a pointer to an integer in C?",
        options: [' <samp>int *ptr;</samp>', ' <samp>int ptr*;</samp>', ' <samp>*int ptr;</samp>', ' <samp>ptr int*;</samp>'],
        answer: "A.int *ptr;",
        explanation: " The correct syntax to declare a pointer to an integer is <samp>int *ptr;</samp>."
    },
    {
        question: " How do you initialize a pointer to point to the address of an integer variable <samp>x</samp>?",
        options: [' <samp>int *ptr = &amp;x</samp>', ' <samp>int *ptr = x;</samp>', ' <samp>int ptr = &amp;x</samp>', ' <samp>int ptr = x;</samp>'],
        answer: "A.int *ptr = &x",
        explanation: " The address of the variable <samp>x</samp> is obtained using the <samp>&amp;</samp> operator, and it is assigned to the pointer <samp>ptr</samp>."
    },
    {
        question: " What does the <samp>*</samp> operator do when used with a pointer variable?",
        options: [' It multiplies the pointer value  ', ' It adds a value to the pointer  ', ' It dereferences the pointer to access the value stored at the address  ', ' It increments the pointer address'],
        answer: "C. It dereferences the pointer to access the value stored at the address",
        explanation: " The <samp>*</samp> operator is used to dereference a pointer, which means accessing the value stored at the memory address the pointer points to."
    },
    {
        question: " Which of the following statements correctly assigns the address of an integer variable <samp>a</samp> to a pointer <samp>p</samp>?",
        options: [' <samp>p = a;</samp>', ' <samp>*p = &amp;a</samp>', ' <samp>p = &amp;a</samp>', ' <samp>*p = a;</samp>'],
        answer: "C.p = &a",
        explanation: " The correct way to assign the address of <samp>a</samp> to pointer <samp>p</samp> is <samp>p = &amp;a</samp>."
    },
    {
        question: " What is the output of the following code?<pre><code>int a = 10;<br/>int *p = &amp;a<br/>printf('%d', *p);</code></pre>",
        options: [' <samp>10</samp>', ' The address of <samp>a</samp>', ' <samp>0</samp>', ' <samp>1</samp>'],
        answer: "A.10",
        explanation: " The pointer <samp>p</samp> stores the address of <samp>a</samp>, and <samp>*p</samp> dereferences the pointer to access the value of <samp>a</samp>, which is 10."
    },
    {
        question: " Which of the following is a valid way to declare a pointer to a character?",
        options: [' <samp>char ptr;</samp>', ' <samp>char *ptr;</samp>', ' <samp>char ptr*;</samp>', ' <samp>*char ptr;</samp>'],
        answer: "B.char *ptr;",
        explanation: " The correct syntax to declare a pointer to a character is <samp>char *ptr;</samp>."
    },
    {
        question: " How do you declare a pointer to a float and initialize it with the address of a float variable <samp>f</samp>?",
        options: [' <samp>float *p = f;</samp>', ' <samp>float *p = &amp;f</samp>', ' <samp>*float p = f;</samp>', ' <samp>float p* = &amp;f</samp>'],
        answer: "B.float *p = &f",
        explanation: " The address of the variable <samp>f</samp> is obtained using the <samp>&amp;</samp> operator, and it is assigned to the pointer <samp>p</samp>."
    },
    {
        question: " What will be the output of the following code?<pre><code>int a = 5;<br/>int *p;<br/>p = &amp;a<br/>*p = 20;<br/>printf('%d', a);</code></pre>",
        options: [' <samp>5</samp>', ' <samp>20</samp>', ' The address of <samp>a</samp>', ' <samp>0</samp>'],
        answer: "B.20",
        explanation: " The pointer <samp>p</samp> stores the address of <samp>a</samp>, and <samp>*p = 20</samp> changes the value of <samp>a</samp> to 20. Therefore, <samp>printf('%d', a)</samp> outputs 20."
    },
    {
        question: " What is a null pointer in C?",
        options: [' A pointer that stores the value <samp>0</samp>', ' A pointer that stores an invalid address  ', ' A pointer that does not point to any valid memory location  ', ' A pointer that points to the start of a memory block'],
        answer: "C. A pointer that does not point to any valid memory location",
        explanation: " A null pointer is a pointer that is not assigned any memory location and is typically used to signify that the pointer does not point to any valid data."
    },
    {
        question: " Which of the following correctly declares a two-dimensional array in C?                ",
        options: [' <samp>int arr[3, 4];</samp>', ' <samp>int arr[3][4];</samp>', ' <samp>int arr(3)(4);</samp>', ' <samp>int arr{3}{4};</samp>'],
        answer: "B.int arr[3][4];",
        explanation: " The correct syntax for declaring a two-dimensional array in C is <samp>int arr[3][4];</samp>.    "
    },
    {
        question: " How do you initialize a two-dimensional array in C?                ",
        options: [' <samp>int arr[3][4] = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}};</samp>', ' <samp>int arr[3][4] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12};</samp>', ' <samp>int arr[3][4] = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10}};</samp>', ' All of the above    '],
        answer: "D. All of the above",
        explanation: " All these initializations are valid in C for a two-dimensional array.    "
    },
    {
        question: " How do you access the element in the second row and third column of a two-dimensional array <samp>arr</samp>?                ",
        options: [' <samp>arr[2][3]</samp>', ' <samp>arr[1][2]</samp>', ' <samp>arr[3][2]</samp>', ' <samp>arr[2][1]</samp>'],
        answer: "B.arr[1][2]",
        explanation: " In C, indices start from 0, so the element in the second row and third column is accessed using <samp>arr[1][2]</samp>.    "
    },
    {
        question: " What will be the output of the following code?                <pre><code>int arr[2][2] = {{1, 2}, {3, 4}};<br/>printf('%d', arr[0][1]);</code></pre>",
        options: [' <samp>1</samp>', ' <samp>2</samp>', ' <samp>3</samp>', ' <samp>4</samp>'],
        answer: "B.2",
        explanation: " The element at the first row and second column is 2.    "
    },
    {
        question: " Which of the following statements correctly prints all elements of a 2D array <samp>arr</samp> of size 2x2?                ",
        options: [' <samp>for(int i=0; i&lt;2; i++) { for(int j=0; j&lt;2; j++) { printf("%d ", arr[i][j]); } }</samp>', ' <samp>for(int i=0; i&lt;2; i++) { printf("%d ", arr[i][i]); }</samp>', ' <samp>for(int j=0; j&lt;2; j++) { for(int i=0; i&lt;2; i++) { printf("%d ", arr[i][j]); } }</samp>', ' Both A and C    '],
        answer: "D. Both A and C",
        explanation: " Both nested loops correctly iterate over and print each element of the 2D array.    "
    },
    {
        question: " How is a 2D array stored in memory using row-major order?                ",
        options: [' Row by row      ', ' Column by column      ', ' Diagonal by diagonal      ', ' Randomly    '],
        answer: "A. Row by row",
        explanation: " In row-major order, the elements of each row of the array are stored in contiguous memory locations.    "
    },
    {
        question: " How is a 2D array stored in memory using column-major order?                ",
        options: [' Row by row      ', ' Column by column      ', ' Diagonal by diagonal      ', ' Randomly    '],
        answer: "B. Column by column",
        explanation: " In column-major order, the elements of each column of the array are stored in contiguous memory locations.    "
    },
    {
        question: " What is the memory address of <samp>arr[1][2]</samp> if the base address of the 2D array <samp>arr</samp> is 1000 and each integer occupies 4 bytes, assuming row-major order?                ",
        options: [' <samp>1012</samp>', ' <samp>1020</samp>', ' <samp>1008</samp>', ' <samp>1004</samp>'],
        answer: "B.1020",
        explanation: " The address can be calculated using the formula <samp>base_address + (i * number_of_columns + j) * element_size</samp>. Here, <samp>1000 + (1 * 4 + 2) * 4 = 1000 + 6 * 4 = 1020</samp>.    "
    },
    {
        question: " Which of the following statements is true about 2D arrays in C?                ",
        options: [' They can only be declared with fixed sizes.      ', ' They can be dynamically allocated.      ', ' They are stored in row-major order by default.      ', ' Both B and C    '],
        answer: "D. Both B and C",
        explanation: " 2D arrays can be dynamically allocated, and they are stored in row-major order by default in C.    "
    },
    {
        question: " What will be the output of the following code snippet?                <pre><code>int arr[3][3] = {0};<br/>for(int i = 0; i &lt; 3; i++) {<br/>for(int j = 0; j &lt; 3; j++) {<br/>printf('%d ', arr[i][j]);<br/>}<br/>printf('\n');<br/>}</code></pre>",
        options: [' A 3x3 matrix of zeros      ', ' A 3x3 matrix of ones      ', ' A 3x3 matrix of uninitialized values      ', ' Error    '],
        answer: "A. A 3x3 matrix of zeros",
        explanation: " The array is initialized with zeros, so all elements will be zero.    "
    },
    {
        question: " How can an array be passed to a function in C?                ",
        options: [' By value      ', ' By reference      ', ' Both A and B      ', ' By copying    '],
        answer: "B. By reference",
        explanation: " Arrays in C are passed to functions by reference, meaning the function receives a pointer to the array rather than a copy of the array.    "
    },
    {
        question: " Which of the following is a correct way to declare a function that takes an integer array as a parameter?                ",
        options: [' <samp>void func(int arr[])</samp>', ' <samp>void func(int arr[10])</samp>', ' <samp>void func(int *arr)</samp>', ' All of the above    '],
        answer: "D. All of the above",
        explanation: " In C, an array parameter can be declared as <samp>int arr[]</samp>, <samp>int arr[10]</samp>, or <samp>int *arr</samp>, as they all represent a pointer to the first element of the array.    "
    },
    {
        question: " What is the output of the following code?                <pre><code>void modifyArray(int arr[], int size) {<br/>arr[0] = 100;<br/>}<br/>int main() {<br/>int arr[3] = {1, 2, 3};<br/>modifyArray(arr, 3);<br/>printf('%d', arr[0]);<br/>return 0;<br/>}</code></pre>",
        options: [' <samp>1</samp>', ' <samp>100</samp>', ' <samp>0</samp>', ' <samp>Error</samp>'],
        answer: "B.100",
        explanation: " The array is passed by reference, so changes made to the array within the function affect the original array.    "
    },
    {
        question: " How can you return an array from a function in C?                ",
        options: [' Return an array directly      ', ' Return a pointer to the array      ', ' Return a structure containing the array      ', ' Both B and C    '],
        answer: "D. Both B and C",
        explanation: " In C, you cannot return an array directly, but you can return a pointer to an array or a structure containing the array.    "
    },
    {
        question: " Which of the following statements is true regarding the use of arrays as function parameters?                ",
        options: [' Arrays are always passed by value.      ', ' The size of the array must be specified in the function parameter.      ', ' The function can modify the original array elements.      ', ' Arrays cannot be used as function parameters.    '],
        answer: "C. The function can modify the original array elements.",
        explanation: " Since arrays are passed by reference, the function can modify the elements of the original array.    "
    },
    {
        question: " What is the correct way to define a function that takes a 2D array as an argument?                ",
        options: [' <samp>void func(int arr[][], int rows, int cols)</samp>', ' <samp>void func(int arr[rows][cols], int rows, int cols)</samp>', ' <samp>void func(int arr[][cols], int rows, int cols)</samp>', ' <samp>void func(int *arr, int rows, int cols)</samp>'],
        answer: "C.void func(int arr[][cols], int rows, int cols)",
        explanation: " When passing a 2D array to a function, the number of columns must be specified.    "
    },
    {
        question: " What is the primary advantage of passing arrays by reference to functions?                ",
        options: [' It is faster as only a pointer is passed.      ', ' It allows modifying the original array.      ', ' It saves memory by not copying the array.      ', ' All of the above    '],
        answer: "D. All of the above",
        explanation: " Passing arrays by reference is faster, allows modification of the original array, and saves memory.    "
    },
    {
        question: " How can you pass a constant array to a function to ensure it is not modified?                ",
        options: [' <samp>void func(const int arr[], int size)</samp>', ' <samp>void func(int const arr[], int size)</samp>', ' <samp>void func(const int *arr, int size)</samp>', ' All of the above    '],
        answer: "D. All of the above",
        explanation: " Declaring the array as <samp>const</samp> ensures that the function cannot modify its elements.    "
    },
    {
        question: " What will be the output of the following code?                <pre><code>void printArray(int arr[], int size) {<br/>for(int i = 0; i &lt; size; i++) {<br/>printf('%d ', arr[i]);<br/>}<br/>}<br/>int main() {<br/>int arr[4] = {1, 2, 3, 4};<br/>printArray(arr, 4);<br/>return 0;<br/>}</code></pre>",
        options: [' <samp>1 2 3 4</samp>', ' <samp>4 3 2 1</samp>', ' <samp>1 2</samp>', ' <samp>Error</samp>'],
        answer: "A.1 2 3 4",
        explanation: " The function prints all elements of the array in the order they are stored.    "
    },
    {
        question: " Which of the following statements is false regarding passing arrays to functions in C?                ",
        options: [' The function can access and modify the original array elements.      ', ' The size of the array does not need to be passed as a separate parameter.      ', ' Arrays are passed by reference to functions.      ', ' The function parameter can be declared as a pointer to the array.    '],
        answer: "B. The size of the array does not need to be passed as a separate parameter.",
        explanation: " The size of the array often needs to be passed as a separate parameter because the function does not know the size of the array from the pointer alone.    "
    },
    {
        question: " How is a multidimensional array declared in C with dimensions 2x3x4?                ",
        options: [' <samp>int arr[2, 3, 4];</samp>', ' <samp>int arr[2][3][4];</samp>', ' <samp>int arr(2)(3)(4);</samp>', ' <samp>int arr{2}{3}{4};</samp>'],
        answer: "B.int arr[2][3][4];",
        explanation: " The correct syntax for declaring a 3D array with dimensions 2x3x4 is <samp>int arr[2][3][4];</samp>.    "
    },
    {
        question: " How do you initialize a multidimensional array <samp>arr</samp> with dimensions 2x2 with all elements set to 0?                ",
        options: [' <samp>int arr[2][2] = {0};</samp>', ' <samp>int arr[2][2] = {0, 0};</samp>', ' <samp>int arr[2][2] = {{0, 0}, {0, 0}};</samp>', ' <samp>int arr[2][2] = {0, 0, 0, 0};</samp>'],
        answer: "C.int arr[2][2] = {{0, 0}, {0, 0}};",
        explanation: " This initializes all elements of the 2x2 array <samp>arr</samp> to 0.    "
    },
    {
        question: " How do you access the element in the third row, second column, and first depth of a 3D array <samp>arr</samp>?                ",
        options: [' <samp>arr[3][2][1]</samp>', ' <samp>arr[2][1][3]</samp>', ' <samp>arr[1][2][3]</samp>', ' <samp>arr[2][3][1]</samp>'],
        answer: "A.arr[3][2][1]",
        explanation: " In a 3D array, the indices correspond to row, column, and depth, respectively.    "
    },
    {
        question: " Which of the following correctly prints all elements of a 2D array <samp>arr</samp> of size 3x3?                ",
        options: [' <samp>for(int i=0; i&lt;3; i++) { for(int j=0; j&lt;3; j++) { printf("%d ", arr[i][j]); } }</samp>', ' <samp>for(int i=0; i&lt;3; i++) { printf("%d ", arr[i][i]); }</samp>', ' <samp>for(int j=0; j&lt;3; j++) { for(int i=0; i&lt;3; i++) { printf("%d ", arr[i][j]); } }</samp>', ' Both A and C    '],
        answer: "D. Both A and C",
        explanation: " Both loops correctly iterate over and print each element of the 2D array <samp>arr</samp>.    "
    },
    {
        question: " How are elements of a multidimensional array stored in memory in C?                ",
        options: [' Randomly      ', ' Column-major order      ', ' Row-major order      ', ' Diagonal-major order    '],
        answer: "C. Row-major order",
        explanation: " In C, multidimensional arrays are stored in row-major order, where elements of each row are stored in contiguous memory locations.    "
    },
    {
        question: " What is the memory address of <samp>arr[1][2][3]</samp> if the base address of the 3D array <samp>arr</samp> is 1000, assuming each integer occupies 4 bytes?                ",
        options: [' <samp>1016</samp>', ' <samp>1012</samp>', ' <samp>1008</samp>', ' <samp>1004</samp>'],
        answer: "A.1016",
        explanation: " The address can be calculated using the formula <samp>base_address + (i * columns * depths + j * depths + k) * element_size</samp>. Here, <samp>1000 + (1 * 3 * 4 + 2 * 4 + 3) * 4 = 1016</samp>.    "
    },
    {
        question: " Which of the following statements is true about multidimensional arrays in C?                ",
        options: [' They can only have two dimensions.      ', ' They cannot be dynamically allocated.      ', ' They can be accessed using nested loops.      ', ' They are always stored in column-major order.    '],
        answer: "C. They can be accessed using nested loops.",
        explanation: " Multidimensional arrays in C can have more than two dimensions and are accessed using nested loops.    "
    },
    {
        question: " How can you pass a 2D array <samp>arr</samp> of size 3x4 to a function in C?                ",
        options: [' <samp>void func(int arr[3][4])</samp>', ' <samp>void func(int arr[][4])</samp>', ' <samp>void func(int *arr, int rows, int cols)</samp>', ' All of the above    '],
        answer: "D. All of the above",
        explanation: " All these methods are valid for passing a 2D array to a function in C.    "
    },
    {
        question: " What is the size of a 2D array <samp>arr</samp> declared as <samp>int arr[3][4];</samp> in bytes, assuming each integer occupies 4 bytes?                ",
        options: [' <samp>12</samp>', ' <samp>24</samp>', ' <samp>48</samp>', ' <samp>16</samp>'],
        answer: "B.24",
        explanation: " The size of the array is calculated as <samp>number_of_rows * number_of_columns * size_of_each_element = 3 * 4 * 4 = 48</samp> bytes.    "
    },
    {
        question: " How do you declare a pointer to a 2D array in C?                ",
        options: [' <samp>int **arr;</samp>', ' <samp>int *arr[];</samp>', ' <samp>int (*arr)[3];</samp>', ' <samp>int arr[][];</samp>'],
        answer: "C.int (*arr)[3];",
        explanation: " <samp>int (*arr)[3];</samp> declares a pointer <samp>arr</samp> that can point to a 2D array where each row has 3 columns."
    },
    {
        question: " Which sorting algorithm is known for having a worst-case time complexity of O(n^2)?                ",
        options: [' Quick Sort      ', ' Merge Sort      ', ' Bubble Sort      ', ' Heap Sort    '],
        answer: "C. Bubble Sort",
        explanation: " Bubble Sort has a worst-case time complexity of O(n^2) because it involves nested loops to compare and swap adjacent elements.    "
    },
    {
        question: " What is the best-case time complexity of Insertion Sort?                ",
        options: [' O(n)      ', ' O(n^2)      ', ' O(log n)      ', ' O(n log n)    '],
        answer: "A. O(n)",
        explanation: " In the best case, when the array is already sorted, Insertion Sort only makes one pass through the array with O(n) comparisons.    "
    },
    {
        question: " Which sorting algorithm uses the divide-and-conquer approach?                ",
        options: [' Selection Sort      ', ' Merge Sort      ', ' Bubble Sort      ', ' Insertion Sort    '],
        answer: "B. Merge Sort",
        explanation: " Merge Sort uses the divide-and-conquer approach by dividing the array into halves, sorting each half, and then merging them back together.    "
    },
    {
        question: " What is the primary operation in the Quick Sort algorithm?                ",
        options: [' Swapping      ', ' Merging      ', ' Shifting      ', ' Partitioning    '],
        answer: "D. Partitioning",
        explanation: " Quick Sort works by selecting a pivot element and partitioning the array into elements less than the pivot and elements greater than the pivot.    "
    },
    {
        question: " Which sorting technique is generally the fastest for large datasets?                ",
        options: [' Bubble Sort      ', ' Selection Sort      ', ' Quick Sort      ', ' Insertion Sort    '],
        answer: "C. Quick Sort",
        explanation: " Quick Sort is generally faster for large datasets due to its average-case time complexity of O(n log n).    "
    },
    {
        question: " What is the space complexity of Merge Sort?                ",
        options: [' O(1)      ', ' O(log n)      ', ' O(n)      ', ' O(n log n)    '],
        answer: "C. O(n)",
        explanation: " Merge Sort requires additional space proportional to the size of the array for the temporary arrays used in merging.    "
    },
    {
        question: " Which sorting algorithm is not comparison-based?                ",
        options: [' Quick Sort      ', ' Merge Sort      ', ' Heap Sort      ', ' Radix Sort    '],
        answer: "D. Radix Sort",
        explanation: " Radix Sort is not comparison-based; it sorts numbers by processing individual digits.    "
    },
    {
        question: " What is the primary difference between Selection Sort and Bubble Sort?                ",
        options: [' Selection Sort finds the minimum element and places it at the correct position in each iteration, while Bubble Sort repeatedly swaps adjacent elements if they are in the wrong order.      ', ' Selection Sort is faster than Bubble Sort in the worst case.      ', ' Bubble Sort is a stable sorting algorithm, while Selection Sort is not.      ', ' Bubble Sort has better space complexity than Selection Sort.    '],
        answer: "A. Selection Sort finds the minimum element and places it at the correct position in each iteration, while Bubble Sort repeatedly swaps adjacent elements if they are in the wrong order.",
        explanation: " Selection Sort selects the minimum element and swaps it with the first unsorted element, while Bubble Sort compares and swaps adjacent elements.    "
    },
    {
        question: " Which sorting algorithm is best suited for linked lists?                ",
        options: [' Quick Sort      ', ' Merge Sort      ', ' Bubble Sort      ', ' Selection Sort    '],
        answer: "B. Merge Sort",
        explanation: " Merge Sort is well-suited for linked lists because it efficiently handles the division and merging of linked lists without requiring random access.    "
    },
    {
        question: " What is the worst-case time complexity of Quick Sort?                ",
        options: [' O(n)      ', ' O(n log n)      ', ' O(n^2)      ', ' O(log n)    '],
        answer: "C. O(n^2)",
        explanation: " Quick Sort has a worst-case time complexity of O(n^2) when the pivot selection leads to highly unbalanced partitions, such as when the smallest or largest element is always chosen as the pivot.    "
    },
    {
        question: " How do you access the first element of an array named <samp>arr</samp>?                ",
        options: [' <samp>arr[1]</samp>', ' <samp>arr[0]</samp>', ' <samp>arr{0}</samp>', ' <samp>arr{1}</samp>'],
        answer: "B.arr[0]",
        explanation: " In C, array indices start from 0, so the first element is accessed using index 0.    "
    },
    {
        question: " What will be the output of the following code?                <pre><code>int arr[3] = {1, 2, 3};<br/>printf('%d', arr[2]);</code></pre>",
        options: [' <samp>1</samp>', ' <samp>2</samp>', ' <samp>3</samp>', ' <samp>Error</samp>'],
        answer: "C.3",
        explanation: " <samp>arr[2]</samp> accesses the third element of the array, which is 3.    "
    },
    {
        question: " Which function is used to print all elements of an integer array <samp>arr</samp> of size <samp>n</samp>?                ",
        options: [' <samp>printf("%d", arr);</samp>', ' <samp>printf("%d", &amp;arr[0]);</samp>', ' <samp>for(int i=0; i<n; ",="" arr[i]);="" i++)="" printf("%d="" samp="" {="" }<=""></n;></samp>', ' <samp>printf("%s", arr);</samp>'],
        answer: "C.for(int i=0; i",
        explanation: " A loop is used to iterate through each element of the array and print it.    "
    },
    {
        question: " What will be the output of the following code snippet?                <pre><code>int arr[4] = {10, 20, 30, 40};<br/>for(int i = 0; i &lt; 4; i++) {<br/>printf('%d ', arr[i]);<br/>}</code></pre>",
        options: [' <samp>10 20 30 40</samp>', ' <samp>10 20 30</samp>', ' <samp>10 20 30 40 50</samp>', ' <samp>Error</samp>'],
        answer: "A.10 20 30 40",
        explanation: " The loop iterates through all elements of the array and prints them in order.    "
    },
    {
        question: " How can you access the last element of an array <samp>arr</samp> with size <samp>n</samp>?                ",
        options: [' <samp>arr[n-1]</samp>', ' <samp>arr[n]</samp>', ' <samp>arr[n+1]</samp>', ' <samp>arr[-1]</samp>'],
        answer: "A.arr[n-1]",
        explanation: " Since array indices start from 0, the last element is at index <samp>n-1</samp>.    "
    },
    {
        question: " What will be the output of the following code?                <pre><code>int arr[5] = {5, 10, 15, 20, 25};<br/>printf('%d', arr[4]);</code></pre>",
        options: [' <samp>5</samp>', ' <samp>10</samp>', ' <samp>20</samp>', ' <samp>25</samp>'],
        answer: "D.25",
        explanation: " <samp>arr[4]</samp> accesses the fifth element of the array, which is 25.    "
    },
    {
        question: " What will be the output of the following code?                <pre><code>int arr[2] = {100, 200};<br/>printf('%d %d', arr[0], arr[1]);</code></pre>",
        options: [' <samp>100 200</samp>', ' <samp>200 100</samp>', ' <samp>100</samp>', ' <samp>200</samp>'],
        answer: "A.100 200",
        explanation: " The code prints the first and second elements of the array in order.    "
    },
    {
        question: " Which of the following statements correctly prints the second element of an integer array <samp>arr</samp>?                ",
        options: [' <samp>printf("%d", arr[2]);</samp>', ' <samp>printf("%d", arr[1]);</samp>', ' <samp>printf("%d", arr[0]);</samp>', ' <samp>printf("%d", arr[-1]);</samp>'],
        answer: "B.printf('%d', arr[1]);",
        explanation: " The second element of an array is accessed using index 1.    "
    },
    {
        question: " What will be the output of the following code?                <pre><code>int arr[3] = {7, 14, 21};<br/>for(int i = 0; i &lt; 3; i++) {<br/>printf('%d ', arr[i]);<br/>}</code></pre>",
        options: [' <samp>7 14 21</samp>', ' <samp>7 14</samp>', ' <samp>14 21</samp>', ' <samp>Error</samp>'],
        answer: "A.7 14 21",
        explanation: " The loop iterates through the entire array and prints each element in order.    "
    },
    {
        question: " How do you print the third element of a character array <samp>char arr[] = 'hello';</samp>?                ",
        options: [' <samp>printf("%c", arr[3]);</samp>', ' <samp>printf("%c", arr[2]);</samp>', ' <samp>printf("%s", arr[2]);</samp>', ' <samp>printf("%d", arr[2]);</samp>'],
        answer: "B.printf('%c', arr[2]);",
        explanation: " The third element of the array (which is the character 'l') is accessed using index 2 and printed using <samp>%c</samp>.    "
    },
    {
        question: " Which of the following correctly defines a one-dimensional array in C?                ",
        options: [' <samp>int arr[10];</samp>', ' <samp>int array;</samp>', ' <samp>int arr{10};</samp>', ' <samp>array[10];</samp>'],
        answer: "A.int arr[10];",
        explanation: " In C, a one-dimensional array is defined using the syntax <samp>type name[size];</samp>. <samp>int arr[10];</samp> correctly defines an array of 10 integers.    "
    },
    {
        question: " What is the default value of uninitialized elements in an array of integers in C?                ",
        options: [' <samp>0</samp>', ' <samp>NULL</samp>', ' <samp>Garbage value</samp>', ' <samp>1</samp>'],
        answer: "C.Garbage value",
        explanation: " In C, if an array is declared but not explicitly initialized, its elements will contain garbage values.    "
    },
    {
        question: " How do you initialize all elements of an array to zero in C?                ",
        options: [' <samp>int arr[5] = {0};</samp>', ' <samp>int arr[5] = 0;</samp>', ' <samp>int arr[5];</samp>', ' <samp>int arr = {0};</samp>'],
        answer: "A.int arr[5] = {0};",
        explanation: " Initializing an array with <samp>{0}</samp> sets all elements to zero. The remaining elements are automatically set to zero if not specified.    "
    },
    {
        question: " What is the output of the following code snippet?                <pre><code>int arr[5] = {1, 2, 3};<br/>printf('%d', arr[4]);</code></pre>",
        options: [' <samp>0</samp>', ' <samp>3</samp>', ' <samp>Garbage value</samp>', ' <samp>2</samp>'],
        answer: "A.0",
        explanation: " The array <samp>arr</samp> is partially initialized with 1, 2, and 3. The remaining elements are automatically set to zero.    "
    },
    {
        question: " Which of the following declarations correctly initializes an array?                ",
        options: [' <samp>int arr[] = {1, 2, 3, 4};</samp>', ' <samp>int arr[4];</samp>', ' <samp>int arr[4] = 1, 2, 3, 4;</samp>', ' <samp>int arr[4] = {1, 2, 3, 4, 5};</samp>'],
        answer: "A.int arr[] = {1, 2, 3, 4};",
        explanation: " An array can be declared and initialized without specifying its size if the initializer list is provided.     "
    },
    {
        question: " How do you access the third element of an array named <samp>arr</samp>?                ",
        options: [' <samp>arr[2]</samp>', ' <samp>arr[3]</samp>', ' <samp>arr(3)</samp>', ' <samp>arr{2}</samp>'],
        answer: "A.arr[2]",
        explanation: " Array indices start from 0. Therefore, the third element is accessed using index 2.    "
    },
    {
        question: " What will be the output of the following code?                <pre><code>int arr[3] = {5, 10, 15};<br/>printf('%d', arr[1]);</code></pre>",
        options: [' <samp>5</samp>', ' <samp>10</samp>', ' <samp>15</samp>', ' <samp>Error</samp>'],
        answer: "B.10",
        explanation: " <samp>arr[1]</samp> accesses the second element of the array, which is 10.    "
    },
    {
        question: " Which of the following statements is true about array declaration?                ",
        options: [' Arrays can hold multiple data types.      ', ' Array size must be a constant expression.      ', ' Array elements cannot be initialized during declaration.      ', ' Array indices can be negative.    '],
        answer: "B. Array size must be a constant expression.",
        explanation: " In C, the size of an array must be a constant expression and cannot change during runtime.    "
    },
    {
        question: " What is the maximum number of elements that can be stored in an array declared as <samp>int arr[5];</samp>?                ",
        options: [' <samp>4</samp>', ' <samp>5</samp>', ' <samp>6</samp>', ' <samp>Depends on the compiler</samp>'],
        answer: "B.5",
        explanation: " The array <samp>arr</samp> can store up to 5 elements as specified by its size.    "
    },
    {
        question: " How do you declare and initialize a one-dimensional character array with the string 'hello'?                ",
        options: [' <samp>char arr[] = "hello";</samp>', ' <samp>char arr[6] = {"h", "e", "l", "l", "o", "\\0"};</samp>', ' <samp>char arr[5] = "hello";</samp>', ' Both A and B    '],
        answer: "D. Both A and B",
        explanation: " A string in C can be initialized directly with double quotes, and a character array can be explicitly initialized with individual characters ending with a null terminator.    "
    },
];
