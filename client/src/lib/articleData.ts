export interface Article {
  id: number;
  title: string;
  excerpt: string;
  fullContent: string;
  author: string;
  date: string;
  category: string;
  color: string;
  readTime: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Kom Igång Med Python - En Nybörjarguide",
    excerpt: "Lär dig grunderna i Python och skapa ditt första program på mindre än en timme.",
    fullContent: `Python är ett utmärkt val för nybörjare. I denna guide kommer vi att täcka variabler, datatyper, loopar och funktioner.

## Varför Python?

Python är känt för sin enkla och läsbar syntax. Det är perfekt för att lära sig programmering eftersom koden ser nästan ut som vanlig engelska.

## Installation

För att komma igång med Python behöver du:
1. Ladda ner Python från python.org
2. Installera det på din dator
3. Öppna en terminal eller kommandotolk
4. Skriv \`python --version\` för att verifiera installationen

## Ditt första program

Här är ett enkelt "Hello World" program:

\`\`\`python
print("Hej världen!")
\`\`\`

## Variabler och datatyper

I Python kan du skapa variabler utan att deklarera deras typ:

\`\`\`python
namn = "Anna"
ålder = 25
höjd = 1.75
är_student = True
\`\`\`

## Loopar

Loopar låter dig upprepa kod flera gånger:

\`\`\`python
for i in range(5):
    print(f"Iteration {i}")
\`\`\`

## Funktioner

Funktioner är återanvändbara block av kod:

\`\`\`python
def hälsa(namn):
    return f"Hej {namn}!"

print(hälsa("Erik"))
\`\`\`

## Nästa steg

Nu när du förstår grunderna kan du:
- Bygga enkla program
- Arbeta med listor och dictionaries
- Lära dig om objektorienterad programmering
- Utforska bibliotek som NumPy och Pandas

Lycka till med din Python-resa!`,
    author: "Rallies Universe",
    date: "2025-12-10",
    category: "Python",
    color: "#3776ab",
    readTime: "8 min",
    tags: ["python", "nybörjare", "tutorial"],
  },
  {
    id: 2,
    title: "JavaScript ES6 - Moderna Funktioner Du Måste Känna Till",
    excerpt: "Utforska de senaste JavaScript-funktionerna som gör koden mer elegant och läsbar.",
    fullContent: `ES6 introducerade många nya funktioner som arrow functions, destructuring, och template literals. Låt oss dyka in i dessa koncept.

## Arrow Functions

Arrow functions är en kortare syntax för att skriva funktioner:

\`\`\`javascript
// Gammal syntax
const add = function(a, b) {
  return a + b;
};

// ES6 arrow function
const add = (a, b) => a + b;
\`\`\`

## Template Literals

Template literals gör det enkelt att skapa strängar med variabler:

\`\`\`javascript
const namn = "Anna";
const ålder = 25;

// Gammal syntax
const greeting = "Hej " + namn + ", du är " + ålder + " år gammal";

// ES6 template literal
const greeting = \`Hej \${namn}, du är \${ålder} år gammal\`;
\`\`\`

## Destructuring

Destructuring låter dig extrahera värden från objekt och arrayer:

\`\`\`javascript
// Objekt destructuring
const person = { namn: "Erik", ålder: 30 };
const { namn, ålder } = person;

// Array destructuring
const colors = ["röd", "grön", "blå"];
const [first, second, third] = colors;
\`\`\`

## Let och Const

\`let\` och \`const\` är bättre alternativ till \`var\`:

\`\`\`javascript
const MAX_SIZE = 100; // Kan inte ändras
let counter = 0;      // Kan ändras
\`\`\`

## Promises

Promises gör det enkelt att hantera asynkron kod:

\`\`\`javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Klart!"), 1000);
});

promise.then(result => console.log(result));
\`\`\`

## Async/Await

Async/await gör asynkron kod mer läsbar:

\`\`\`javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
\`\`\`

## Sammanfattning

ES6 gjorde JavaScript mycket mer kraftfullt och läsbart. Dessa funktioner är nu standard i modern JavaScript-utveckling.`,
    author: "Rallies Universe",
    date: "2025-12-08",
    category: "JavaScript",
    color: "#f7df1e",
    readTime: "12 min",
    tags: ["javascript", "es6", "modern"],
  },
  {
    id: 3,
    title: "Rust Ownership System - Förklarat Enkelt",
    excerpt: "Förstå Rusts unika ownership-system och varför det gör Rust så säkert.",
    fullContent: `Ownership är en av de viktigaste koncepten i Rust. Det säkerställer minnessäkerhet utan garbage collection.

## Vad är Ownership?

Ownership är ett system för att hantera minne. Varje värde i Rust har en ägare, och när ägaren går ur scope, tas värdet bort från minnet automatiskt.

## Regler för Ownership

1. Varje värde har en ägare
2. Det kan bara finnas en ägare åt gången
3. När ägaren går ur scope, tas värdet bort

## Exempel

\`\`\`rust
fn main() {
    let s1 = String::from("hej");
    let s2 = s1; // s1:s ownership flyttas till s2
    
    // println!("{}", s1); // Detta skulle ge ett fel!
    println!("{}", s2);   // Detta fungerar
}
\`\`\`

## Borrowing

Borrowing låter dig låna ett värde utan att ta över ownership:

\`\`\`rust
fn main() {
    let s1 = String::from("hej");
    let len = calculate_length(&s1);
    
    println!("'{}' har längden {}", s1, len);
}

fn calculate_length(s: &String) -> usize {
    s.len()
}
\`\`\`

## Mutable Borrowing

Du kan låna ett värde för att ändra det:

\`\`\`rust
fn main() {
    let mut s = String::from("hej");
    change_string(&mut s);
    println!("{}", s);
}

fn change_string(s: &mut String) {
    s.push_str(" världen");
}
\`\`\`

## Varför är detta viktigt?

Ownership-systemet förhindrar:
- Use-after-free fel
- Double-free fel
- Data races

Allt detta kontrolleras vid kompilering, inte vid körning!

## Slutsats

Ownership kan verka komplicerat i början, men det är det som gör Rust så säkert och snabbt.`,
    author: "Rallies Universe",
    date: "2025-12-05",
    category: "Rust",
    color: "#ce422b",
    readTime: "15 min",
    tags: ["rust", "ownership", "minnessäkerhet"],
  },
  {
    id: 4,
    title: "Go Goroutines - Parallell Programmering Gjord Enkelt",
    excerpt: "Lär dig hur du använder goroutines för att skriva effektiv parallell kod i Go.",
    fullContent: `Goroutines är en av Go:s mest kraftfulla funktioner. De gör det enkelt att skriva concurrent kod.

## Vad är en Goroutine?

En goroutine är en lätt tråd som hanteras av Go-körtiden. Du kan köra tusentals goroutines utan att slösa mycket minne.

## Din första Goroutine

\`\`\`go
package main

import (
    "fmt"
    "time"
)

func main() {
    go sayHello()
    time.Sleep(1 * time.Second)
}

func sayHello() {
    fmt.Println("Hej från en goroutine!")
}
\`\`\`

## Channels

Channels låter goroutines kommunicera med varandra:

\`\`\`go
package main

import "fmt"

func main() {
    messages := make(chan string)
    
    go func() {
        messages <- "Hej från goroutine!"
    }()
    
    msg := <-messages
    fmt.Println(msg)
}
\`\`\`

## Buffered Channels

Buffered channels kan hålla flera värden:

\`\`\`go
messages := make(chan string, 2)
messages <- "första"
messages <- "andra"

fmt.Println(<-messages)
fmt.Println(<-messages)
\`\`\`

## Select Statement

Select låter dig vänta på flera channel-operationer:

\`\`\`go
select {
case msg1 := <-channel1:
    fmt.Println("Mottog från channel1:", msg1)
case msg2 := <-channel2:
    fmt.Println("Mottog från channel2:", msg2)
}
\`\`\`

## Praktiskt Exempel

\`\`\`go
package main

import (
    "fmt"
    "sync"
)

func main() {
    var wg sync.WaitGroup
    
    for i := 1; i <= 5; i++ {
        wg.Add(1)
        go func(n int) {
            defer wg.Done()
            fmt.Printf("Goroutine %d\n", n)
        }(i)
    }
    
    wg.Wait()
}
\`\`\`

## Slutsats

Goroutines gör concurrent programmering enkelt och effektivt i Go.`,
    author: "Rallies Universe",
    date: "2025-12-03",
    category: "Go",
    color: "#00add8",
    readTime: "10 min",
    tags: ["go", "concurrency", "goroutines"],
  },
  {
    id: 5,
    title: "Java Spring Boot - Bygga REST API:er",
    excerpt: "Skapa en fullständig REST API med Spring Boot på bara några minuter.",
    fullContent: `Spring Boot förenklar utvecklingen av Java-applikationer. Vi kommer att bygga en komplett API från grunden.

## Vad är Spring Boot?

Spring Boot är ett ramverk som gör det enkelt att bygga produktionsklara Spring-applikationer.

## Installation

1. Ladda ner Java Development Kit (JDK)
2. Installera Maven eller Gradle
3. Använd Spring Initializr för att skapa ett projekt

## Ditt första Endpoint

\`\`\`java
@RestController
@RequestMapping("/api")
public class HelloController {
    
    @GetMapping("/hello")
    public String hello() {
        return "Hej från Spring Boot!";
    }
}
\`\`\`

## Arbeta med Data

\`\`\`java
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String email;
    
    // Getters och setters
}
\`\`\`

## Repository

\`\`\`java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
\`\`\`

## Service Layer

\`\`\`java
@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
    
    public User createUser(User user) {
        return userRepository.save(user);
    }
}
\`\`\`

## REST Endpoints

\`\`\`java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUserById(id);
    }
    
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }
}
\`\`\`

## Konfiguration

\`\`\`properties
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=update
\`\`\`

## Slutsats

Spring Boot gör det enkelt att bygga robusta REST API:er i Java.`,
    author: "Rallies Universe",
    date: "2025-12-01",
    category: "Java",
    color: "#007396",
    readTime: "14 min",
    tags: ["java", "spring-boot", "rest-api"],
  },
  {
    id: 6,
    title: "C++ Templates - Generisk Programmering",
    excerpt: "Bemästra C++ templates och skriv återanvändbar, typ-säker kod.",
    fullContent: `Templates är ett kraftfullt verktyg i C++ för att skriva generisk kod som fungerar med olika datatyper.

## Vad är Templates?

Templates låter dig skriva kod som fungerar med vilken datatyp som helst, medan du behåller typsäkerhet.

## Function Templates

\`\`\`cpp
template <typename T>
T add(T a, T b) {
    return a + b;
}

int main() {
    std::cout << add(5, 3) << std::endl;           // 8
    std::cout << add(2.5, 3.5) << std::endl;       // 6.0
    std::cout << add("Hej", " världen") << std::endl; // Hej världen
}
\`\`\`

## Class Templates

\`\`\`cpp
template <typename T>
class Stack {
private:
    std::vector<T> elements;
    
public:
    void push(const T& value) {
        elements.push_back(value);
    }
    
    T pop() {
        T value = elements.back();
        elements.pop_back();
        return value;
    }
};
\`\`\`

## Template Specialization

\`\`\`cpp
template <typename T>
class Printer {
public:
    void print(T value) {
        std::cout << value << std::endl;
    }
};

// Specialisering för strings
template <>
class Printer<std::string> {
public:
    void print(std::string value) {
        std::cout << "String: " << value << std::endl;
    }
};
\`\`\`

## Variadic Templates

\`\`\`cpp
template <typename... Args>
void print(Args... args) {
    (std::cout << ... << args);
}

int main() {
    print("Hej", " ", "världen", "!"); // Hej världen!
}
\`\`\`

## Constraints (C++20)

\`\`\`cpp
template <typename T>
requires std::integral<T>
T multiply(T a, T b) {
    return a * b;
}
\`\`\`

## Fördelar

- Typ-säkerhet
- Prestanda (ingen runtime overhead)
- Återanvändbar kod
- Flexibilitet

## Slutsats

Templates är en avancerad men kraftfull funktion i C++ som gör koden mer generisk och återanvändbar.`,
    author: "Rallies Universe",
    date: "2025-11-29",
    category: "C++",
    color: "#00599c",
    readTime: "16 min",
    tags: ["c++", "templates", "generisk-programmering"],
  },
];
