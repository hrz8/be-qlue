# be Qlue

## What's going on here?
- [Shell](#01_shell)
- [SQL](#02_sql)
- [NodeJS](#03_nodejs-prime)
- [Javascript](#04_javascript)
- [Algorithmic](#05_algorithmic)
- [Bonus: Parallel and Concurrency](#06_parallel-concurrency)
- [Bonus: Rounded Matrix Path](#07_rounding-path)

## 01_shell

### Play the Game

```bash
[be-qlue]$ cd 01_shell/
```

> Create a single line script that returns the number of httpd processes that are running on the current machine

```bash
[01_shell]$ bash httpd_proccess_count.sh
# OR
[01_shell]$ ./httpd_proccess_count
```

Note: 
- the first bash script using `grep -c` to directly count how many `httpd` word from `ps -A` process status list command
- the second binary file using `grep [query]` command to fetch list of line which contains `httpd` from `ps -A` process status list command and then count the result line using `wc -l` word count command

>From the current folder (/tmp), provide some bash commands that will rename all the *.txt files in mig33/inner_folder/ to *.dat

```bash
[01_shell]$ cd tmp/
[tmp]$ bash transform_txt_dat.sh
```

## 02_sql

### Play the Game

```bash
[be-qlue]$ cd 02_sql/
```

```bash
# 1)
[02_sql]$ cat 01_solution.sql
```

```bash
# 2)
[02_sql]$ cat 02_solution.sql
```

## 03_nodejs-prime

### Play the Game

```bash
[be-qlue]$ cd 03_nodejs-prime/
```
> Write a function which, taking in a positive integer n as input, returns an array of all primes lower than n.

```bash
[03_nodejs-prime]$ node index.js [number]
```

Note:
- `[number]` is a positive integer number n as an input number
- the requested function that returns array of primes number lower than `number` is exist in `./03_nodejs-prime/index.js` file called `collectPrime()`
- `collectPrime()` function using `isPrime()` function in the body that exist in `./03_nodejs-prime/utils.js` file

Optional:
- if you want to **build** the binary file, you need to make sure that your machine **connect to the internet** for download some dev dependencies packages. if so you can run this command:
    ```bash
  [03_nodejs-prime]$ bin/setup
  ```
- the binary file that can be run using:
  ```bash
  [03_nodejs-prime]$ bin/collect_prime [number]
  ```

## 04_javascript

### Play the Game

```bash
[be-qlue]$ cd 04_javascript/
```
> Write the NodeJS function which, taking in a raw data set as first mentioned, will return the improved json-encoded string and expose it into standard RESTFul API

```bash
[04_javascript]$ npm start
```

Note:
- to lookup the RestFul API Response go to http://localhost:8080/ from your machine
- the requested function to sanitize and improve the json response can found and exist in `./04_javascript/utils.js` as `sanitizeResponse()`

## 05_algorithmic

### Play the Game

```bash
[be-qlue]$ cd 05_algorithmic/
```
> Write a function which, taking a positive integer n as input, finds all sets of numbers that sum up to n.

```bash
[05_algorithmic]$ node index.js [number]
```

Note:
- `[number]` is a positive integer number n as an input number
- the requested function that returns all sets of numbers that sum up to `number` is exist in `./05_algorithmic/index.js` file as method of `SumSet` object in `SumSet.prototype.combinations()`
- `combinations()` method of `SumSet` is a recursive method that returns an array of set numbers

Optional:
- if you want to **build** the binary file, you need to make sure that your machine **connect to the internet** for download some dev dependencies packages. if so you can run this command:
    ```bash
  [05_algorithmic]$ bin/setup
  ```
- the binary file that can be run using:
  ```bash
  [05_algorithmic]$ bin/get_combinations [number]
  ```

## 06_parallel-concurrency

### Reading for you

[Click Here](../master/06_parallel-concurrency)

## 07_rounding-path

### Play the Game

```bash
[be-qlue]$ cd 07_rounding-path/
```
> Write the function which, taking [N] for argument as the width and height for square matrix (NxN = ROWxCOL), will return something like this:

```bash
# N = 2
[
  [1,2],
  [4,3]
]

# N = 3
[
  [1,2,3],
  [8,9,4],
  [7,6,5]
]

# N = 4
[
  [1,  2, 3,4],
  [12,13,14,5],
  [11,16,15,6],
  [10, 9, 8,7]
]
```

```bash
[07_rounding-path]$ node index.js [number]
```

Note:
- the output will show 2d array (matrix) with rounding path number (left --> right, top --> bottom, right --> left, bottom --> top, so on)

## App Info

### Authors

Hirzi Nurfakhrian
