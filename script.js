const tasksData = {
    tour1: {
        name: "Тур 1: Основы",
        topics: {
            mobile: {
                name: "Мобильная разработка",
                tasks: [
                    {
                        id: "t1_m100_1",
                        points: 100,
                        type: "multiple",
                        title: "Виджеты в Kivy",
                        question: "Отметьте верные утверждения о виджетах Kivy:",
                        options: [
                            "Label используется для отображения текста",
                            "Button реагирует на нажатия",
                            "TextInput позволяет вводить текст",
                            "BoxLayout переключает экраны"
                        ],
                        correct: [0, 1, 2]
                    },
                    {
                        id: "t1_m100_2",
                        points: 100,
                        type: "matching",
                        title: "Виджеты и их назначение",
                        question: "Соотнесите виджеты Kivy с описанием:",
                        left: ["Label", "Button", "TextInput", "Image"],
                        right: ["Надпись", "Кнопка", "Поле ввода", "Картинка"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        id: "t1_m200_1",
                        points: 200,
                        type: "fix",
                        title: "Базовый синтаксис Kivy",
                        question: "Найдите и исправьте 5 ошибок в коде приложения на Kivy.",
                        code: `
from kivy.app import App
from kivy.uix.button import Button
from kivy.uix.boxlayout import Layout
from kivy.uix.label import Label
from kivy.uix.screenmanager import Manager
from kivy.uix.screenmanager import Screen


class MyScreen(Screen):
    def init(self, **kw):
        super().init(**kw)

        line = BoxLayout(orientation="vertical")
        line.add_widget(Label(text="Hello, world!"))
        line.add_widget(Button(text="Нажми!"))
        self.add_widget(line)


class MyApp(App):
    def build(self):
        screen_manager = Manager()
        screen_manager.add_widget(MyScreen(name="screen-1"))
        return screen_manager


app = MyApp()
app.start()
                        `
                    },
                    {
                        id: "t1_m200_2",
                        points: 200,
                        type: "complete",
                        title: "Переключение экранов и события",
                        question: "Допишите код для переключения между экранами:",
                        code: `
from kivy.app import App
from kivy.uix.screenmanager import ScreenManager, Screen
from kivy.uix.button import Button
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.label import Label


class MainScreen(Screen):
    def __init__(self, **kw):
        super().__init__(**kw)
        layout = BoxLayout(orientation="vertical", padding=100, spacing=200)

        btn = Button(text="Перейти", on_press=self.go_next)
        lbl = Label(text="Первый экран")
        layout.add_widget(lbl)
        layout.add_widget(btn)
        self.add_widget(layout)

    def go_next(self, instance):
        self.manager.current = "second"


class SecondScreen(Screen):
    def __init__(self, **kw):
        super().__init__(**kw)
        layout = BoxLayout(orientation="vertical", padding=100, spacing=200)

        btn = Button(text="Перейти")
        lbl = Label(text="Второй экран")
        layout.add_widget(lbl)
        layout.add_widget(btn)
        self.add_widget(layout)


class ThirdScreen(Screen):
    def __init__(self, **kw):
        super().__init__(**kw)
        layout = BoxLayout(orientation="vertical", padding=100, spacing=200)

        btn = Button(text="Перейти")
        lbl = Label(text="Третий экран")
        layout.add_widget(lbl)
        layout.add_widget(btn)
        self.add_widget(layout)


class MyApp(App):
    def build(self):
        sm = ScreenManager()
        sm.add_widget(MainScreen(name="main"))
        sm.add_widget(SecondScreen(name="second"))
        sm.add_widget(ThirdScreen())
        return sm


app = MyApp()
app.run()
                        `
                    },
                    {
                        id: "t1_m300_1",
                        points: 300,
                        type: "write",
                        title: "Многоэкранное приложение",
                        question: "Напиши код в VSCode для приложения с 3-мя экранами:<ul> <li>Первое содержит 2 кнопки с выбором перехода к 2-м другим окнам;</li> <li>Второе содержит надпись и кнопку для возврата на первый экран;</li> <li>Третье содержит текстовое поле и кнопку для возврата на первый экран.</li> </ul>",
                    }
                ]
            },
            data: {
                name: "Анализ данных",
                tasks: [
                    {
                        id: "t1_d100_1",
                        points: 100,
                        type: "multiple",
                        title: "Структуры данных Pandas",
                        question: "Отметьте верные утверждения о структурах данных в Pandas",
                        options: [
                            "Series — одномерная структура с индексами и данными",
                            "DataFrame — табличная структура, где каждый столбец является Series",
                            "Индексы в Series могут быть только числовыми",
                            "Все данные в одном столбце DataFrame должны быть одного типа"
                        ],
                        correct: [0, 1, 3]
                    },
                    {
                        id: "t1_d100_2",
                        points: 100,
                        type: "matching",
                        title: "Методы Pandas и их назначение",
                        question: "Соотнесите методы Pandas с их функциями",
                        left: ["head()", "info()", "describe()", "value_counts()"],
                        right: [
                            "Возвращает первые n строк DataFrame",
                            "Показывает информацию о столбцах и типах данных",
                            "Возвращает статистические показатели для числовых данных",
                            "Подсчитывает количество уникальных значений в столбце"
                        ],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        id: "t1_d200_1",
                        points: 200,
                        type: "fix",
                        title: "Сводная таблица: средний рейтинг по категории и типу",
                        question: "Исправьте код для создания сводной таблицы со средним рейтингом",
                        code: `
import pandas as pd

df = pd.read_csv("GoogleApps.csv")

# Создать сводную таблицу со среднеим значением рейтинга: категории по строкам, тип по столбцам
pivot = df.pivot_tabel(
    columns="Category", index="Type", values="Rating", aggfunc="max"
)

print(pivot.head())
                        `
                    },
                    {
                        id: "t1_d200_2",
                        points: 200,
                        type: "complete",
                        title: "Очистка данных: заполнение пропусков",
                        question: "Допишите код для обработки пропущенных значений в столбце Rating",
                        code: `
import pandas as pd

df = pd.____("GooglePlayStore_wild.csv")

def clean_price(price):
    if price[0] == "$":
        return float(price[1:])
    return 0


df[""] = df[""].____(clean_price)
df.info()
                    `
                    },
                    {
                        id: "t1_d300_1",
                        points: 300,
                        type: "write",
                        title: "Количество приложений с рейтингом выше среднего",
                        question: "Напиши код, который выведет количество приложений, чей рейтинг выше среднего по всему датасету",
                    },
                ]
            },
            ml: {
                name: "Машинное обучение",
                tasks: [
                    {
                        id: "t1_o100_1",
                        points: 100,
                        type: "multiple",
                        title: "Основы KNN и подготовка данных",
                        question: "Отметьте верные утверждения о методе K-ближайших соседей (KNN) и подготовке данных",
                        options: [
                            "KNN применяется для задач классификации",
                            "Перед обучением KNN данные необходимо стандартизировать, чтобы признаки с большим диапазоном не доминировали",
                            "Для разделения данных на обучающую и тестовую выборки используется функция train_test_split",
                            "В методе KNN значение k должно быть чётным, чтобы избежать неоднозначности при голосовании"
                        ],
                        correct: [0, 1, 2]
                    },
                    {
                        id: "t1_o100_2",
                        points: 100,
                        type: "matching",
                        title: "Предобработка датасета",
                        question: "Соотнесите методы pandas с их назначением при очистке данных",
                        left: ["drop()", "fillna()", "get_dummies()", "apply()"],
                        right: ["Заполнение пропущенных значений", "Создание фиктивных переменных из категориальных данных", "Удаление столбцов или строк", "Применение функции к каждому элементу"],
                        correct: [2, 0, 1, 3]
                    },
                    {
                        id: "t1_o200_1",
                        points: 200,
                        type: "fix",
                        title: "Предсказание выживших на Титанике (KNN)",
                        question: "Найдите и исправьте ошибки, чтобы программа корректно обучилась и вывела результат.",
                        code: `
import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClasifier
from sklearn.metrics import accuracy_score

df = pd.read_csv("titanic_clear.csv")

X = df.drop("Survived", axis=1)
y = df["Survived"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25)

sc = StandardScaler()

X_train = sc.fit_transform(X_train)
X_test = sc.fit_transform(X_test)

classifier = KNeighborsClasifier(k=5)
classifier.fit(y_test, X_test)

y_pred = classifier.predict(X_train)
print("Процент правильно предсказанных исходов:", accuracy_score(y_train, y_pred) * 100)
                        `
                    },
                    {
                        id: "t1_o200_2",
                        points: 200,
                        type: "complete",
                        title: "Сравнение алгоритмов машинного обучения",
                        question: "",
                        code: `
import pandas as pd
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import SGDClassifier
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

df = pd.read_csv("titanic_clear.csv")
y = df["Survived"]
X = df.drop(["Survived"], axis=1)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=)

scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

models = {
    "KNN": KNeighborsClassifier(n_neighbors=3),
    "NaiveBayes": GaussianNB(),
    "DecisionTree": DecisionTreeClassifier(),
    "SGD": SGDClassifier(n_jobs=-1),
}

results = {}

for name, model in models.items():
    # === Допишите здесь: обучите модель на X_train и y_train ===
    # === Допишите здесь: сделайте предсказание для X_test ===
    # === Допишите здесь: вычислите точность и сохраните в results[name] ===
    pass

best_model = max(results, key=results.get)
print(f"Лучший алгоритм: {best_model} (точность: {results[best_model] * 100:.2f}%)")
                    `
                    },
                    {
                        id: "t1_o300_1",
                        points: 300,
                        type: "write",
                        title: "Предсказание погоды: Наивный Байес",
                        question: "На основе датасета <code>weatherData.csv</code> построй модель машинного обучения для предсказания состояния погоды (<code>Summary</code>).<br><br>Выполните следующие шаги:<ol><li>Загрузите данные из файла.</li><li>Выделите целевую переменную <code>y</code> — столбец <code>Summary</code>.</li><li>Сформируйте признаки <code>X</code>, удалив столбцы <code>date</code>, <code>Summary</code> и <code>Precip Type</code>.</li><li>Разделите данные на обучающую и тестовую выборки в соотношении 70/30 (<code>test_size=0.3</code>).</li><li>Обучите модель наивного байесовского классификатора (<code>GaussianNB</code>).</li><li>Сделайте предсказания для тестовой выборки и вычислите точность модели (<code>accuracy_score</code>).</li></ol>Напишите полный рабочий код в VSCode. Программа должна вывести значение точности. Когда закончите — позовите преподавателя для проверки.",
                    },
                ]
            },
            // web: {
            //     name: "Веб-разработка",
            //     tasks: [
            //         {
            //             id: "t1_w100_1",
            //             points: 100,
            //             type: "multiple",
            //             title: "",
            //             question: "",
            //             options: [],
            //             correct: []
            //         },
            //         {
            //             id: "t1_w100_2",
            //             points: 100,
            //             type: "matching",
            //             title: "",
            //             question: "",
            //             left: [],
            //             right: [],
            //             correct: []
            //         },
            //         {
            //             id: "t1_w200_1",
            //             points: 200,
            //             type: "fix",
            //             title: "",
            //             question: "",
            //             code: ``
            //         },
            //         {
            //             id: "t1_w200_2",
            //             points: 200,
            //             type: "complete",
            //             title: "",
            //             question: "",
            //             code: `

            //         `
            //         },
            //         {
            //             id: "t1_w300_1",
            //             points: 300,
            //             type: "write",
            //             title: "",
            //             question: "",
            //         },
            //     ]
            // }
        }
    },

    tour2: {
        name: "Тур 2: Продвинутый",
        topics: {
            mobile: {
                name: "Мобильная разработка",
                tasks: [
                    {
                        id: "t2_m100_1",
                        points: 100,
                        type: "multiple",
                        title: "MVP (Minimum Viable Product)",
                        question: "Отметьте все верные утверждения о минимально жизнеспособном продукте (MVP):",
                        options: [
                            "MVP содержит только необходимый функционал для проверки идеи",
                            "MVP должен быть идеальным продуктом со всеми функциями",
                            "MVP помогает быстро получить обратную связь от пользователей",
                            "MVP разрабатывается для тестирования гипотез",
                            "MVP не требует тестирования на пользователях",
                        ],
                        correct: [0, 2, 3]
                    },
                    {
                        id: "t2_m100_2",
                        points: 100,
                        type: "matching",
                        title: "Инструменты планирования",
                        question: "Соотнесите инструменты планирования с их описанием:",
                        left: ["Чек-лист", "Kanban-доска", "Ментальная карта"],
                        right: ["Список задач для выполнения", "Визуализация этапов работы с карточками", "Древовидная структура идей и понятий"],
                        correct: [0, 1, 2]
                    },
                    {
                        id: "t2_m200_1",
                        points: 200,
                        type: "fix",
                        title: "Базовый синтаксис Kivy",
                        question: "Найдите и исправьте 5 ошибок в коде приложения на Kivy.",
                        code: `
from kivy.app import App
from kivy.uix.screenmanager import ScreenManager
from kivy.uix.screenmanager import Screen
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.textinput import TextInput
from kivy.uix.button import Button


class InputScreen(Screen):
    def __init__(self, **kw):
        super().__init__(**kw)

        layout = BoxLayout(orientation="vertical", padding=20, spacing=10)

        self.name_input = Textinput(hint_text="Введите имя")
        self.age_input = Textinput(hint_text="Возраст", input_filter="int")

        btn = Button(text="Далее", on_press=self.go_next)

        layout.add_widget(self.name_input)
        layout.add_widget(self.age_input)
        layout.add_widget(btn)
        self.add_widget(layout)

    def go_next(self, instance):
        ResultScreen._name = self.name_input.text
        ResultScreen._age = self.age_input.text
        self.manager.current = "result"


class ResultScreen(Screen):
    _name = None
    _age = None

    def __init__(self, **kw):
        super().__init__(**kw)

        layout = BoxLayout(orientation="vertical", padding=20, spacing=10)
        self.label = Label()
        btn = Button(text="Далее", on_press=self.go_next)

        layout.add_widget(self.label)
        layout.add_widget(btn)
        self.add_widget(layout)

    def on_pre_enter(self):
        self.label.text = f"{self._name} - {self._age} лет"

    def go_next(self, instance):
        self.manager.current = "input"


class MyApp(App):
    def build(self):
        sm = ScreenManager()
        sm.add_widget(InputScreen(name="input"))
        sm.add_widget(Screen(name="result"))
        return sm


app = MyApp
app.run()
                        `
                    },
                    {
                        id: "t2_m200_2",
                        points: 200,
                        type: "complete",
                        title: "Передача данных между экранами в Kivy",
                        question: "Допишите код приложения-калькулятора. Приложение должно:<ol><li>Принимать число на первом экране </li><li>При нажатии «Посчитать» переходить на второй экран </li><li>Отображать квадрат введённого числа </li><li>По кнопке «Назад» возвращаться на первый экран</li></ol>",
                        code: `
from kivy.app import App
from kivy.uix.screenmanager import ScreenManager, Screen
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.textinput import TextInput
from kivy.uix.button import Button
from kivy.uix.label import Label


class CalcScreen(Screen):
    def __init__(self, **kw):
        super().__init__(**kw)
        layout = BoxLayout(orientation="vertical", padding=20, spacing=10)

        self.num_input = TextInput(hint_text="Введите число", input_filter="int")
        btn = Button(text="Посчитать", on_press=self.calculate)

        layout.add_widget(self.num_input)
        layout.add_widget(btn)
        self.add_widget(layout)

    def calculate(self, instance):
        # === Допишите здесь: передать число на экран результата ===
        # Подсказка: используйте атрибут класса ResultScreen

        # === Допишите здесь: переключиться на экран "result" ===
        pass


class ResultScreen(Screen):
    _number = None

    def __init__(self, **kw):
        super().__init__(**kw)
        layout = BoxLayout(orientation="vertical", padding=20, spacing=10)

        self.result_label = Label()
        btn = Button(text="Назад", on_press=self.go_back)

        layout.add_widget(self.result_label)
        layout.add_widget(btn)
        self.add_widget(layout)

    def on_pre_enter(self):
        # === Допишите здесь: отобразить квадрат числа в label ===
        # Подсказка: используйте self._number и f-строку
        pass

    def go_back(self, instance):
        # === Допишите здесь: переключиться на экран "calc" ===
        pass


class MyApp(App):
    def build(self):
        sm = ScreenManager()
        sm.add_widget(CalcScreen(name="calc"))
        sm.add_widget(ResultScreen(name="result"))
        return sm


app = MyApp()
app.run()
                        `
                    },
                    {
                        id: "t2_m300_1",
                        points: 300,
                        type: "write",
                        title: "Многоэкранное приложение",
                        question: "Напиши код в VSCode для приложения с 3-мя экранами:<ul> <li>Первое содержит кнопку 'Начать' и открывает второе окно;</li> <li>Второе содержит надпись 'Введите 2 числа', 2 текстовых поля для ввода чисел с обработкой ввода и кнопку 'Умножить', которая открывает третье окно;</li> <li>Третье содержит Надпись с произведением 2-х чисел из прошлого окна.</li> </ul>",
                    }
                ]
            },
            data: {
                name: "Анализ данных",
                tasks: [
                    {
                        id: "t2_d100_1",
                        points: 100,
                        type: "multiple",
                        title: "Фильтрация данных",
                        question: "Какие условия фильтрации записаны корректно для DataFrame df?",
                        options: [
                            "df[df['Rating'] > 4.5]",
                            "df[(df['Type'] == 'Free') & (df['Price'] == 0)]",
                            "df[df['Rating'] > 4.5 and df['Type'] == 'Free']",
                            "df[(df['Reviews'] >= 1000) | (df['Installs'] > 10000)]"
                        ],
                        correct: [0, 1, 3]
                    },
                    {
                        id: "t2_d100_2",
                        points: 100,
                        type: "matching",
                        title: "Статистические функции и их смысл",
                        question: "Соотнесите статистические показатели из describe() с их определением",
                        left: ["mean", "std", "50%", "max"],
                        right: [
                            "Среднее арифметическое значений столбца",
                            "Стандартное отклонение — мера разброса данных относительно среднего",
                            "Медиана — значение, которое делит выборку пополам",
                            "Максимальное значение в столбце"
                        ],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        id: "t2_d200_1",
                        points: 200,
                        type: "fix",
                        title: "Очистка: замена пропусков на медиану",
                        question: "Допишите код для заполнения пропусков в столбце Rating медианным значением",
                        code: `
import pandas as pd

df = pd.read_csv("GooglePlayStore_wild.csv")
print(df["Rating"].isnull().sum())

# Найти медиану столбца Rating
median_rating = df["Rating"].max()

# Заменить пропуски на медиану
df["Rating"] = df["Rating"].fill(median_rating, inplace=False)

print(df["Rating"].isnull().sum())
                        `
                    },
                    {
                        id: "t2_d200_2",
                        points: 200,
                        type: "complete",
                        title: "Группировка: средний рейтинг по категориям",
                        question: "Допишите код для расчёта среднего рейтинга приложений в каждой категории",
                        code: `
import pandas as pd

df = pd.read_csv("GoogleApps.csv")

# Сгруппировать данные по столбцу Category и найти средний Rating
result = df.____(by="____")["____"].____()

print(result.head())
                        `
                    },
                    {
                        id: "t2_d300_1",
                        points: 300,
                        type: "write",
                        title: "Статистика рейтинга по типу приложения",
                        question: "Напиши код, который выведет минимальный, средний и максимальный рейтинг ('Rating') для платных и бесплатных приложений ('Type') с точностью до десятых:<ul><li>Используй <code>groupby()</code> для группировки по столбцу 'Type';</li><li>Примени <code>agg()</code> со списком функций ['min', 'mean', 'max'];</li><li>Округли результат до 1 знака после запятой с помощью <code>round()</code>.</li></ul><b>Ожидаемый вывод:</b> таблица с двумя строками (Free/Paid) и тремя столбцами (min/mean/max).",
                    },
                ]
            },
            ml: {
                name: "Машинное обучение",
                tasks: [
                    {
                        id: "t2_o100_1",
                        points: 100,
                        type: "multiple",
                        title: "Характеристики алгоритмов ML",
                        question: "Отметьте верные утверждения об алгоритмах машинного обучения",
                        options: [
                            "Наивный байесовский классификатор предполагает, что все признаки независимы друг от друга",
                            "Решающие деревья интуитивно понятны, но склонны к переобучению без контроля глубины",
                            "Стохастический градиентный спуск (SGD) использует весь набор данных для каждого шага, что делает его медленным",
                            "Метод KNN чувствителен к масштабу признаков и требует стандартизации данных"
                        ],
                        correct: [0, 1, 3]
                    },
                    {
                        id: "t2_o100_2",
                        points: 100,
                        type: "matching",
                        title: "Алгоритмы и их принципы",
                        question: "Соотнесите алгоритм с его ключевой особенностью или областью применения:",
                        left: ["Naive Bayes", "Decision Tree", "SGD", "KNN"],
                        right: ["Минимизирует функцию потерь через случайные примеры", "Основан на теореме Байеса, эффективен для текстов", "Классифицирует по расстоянию до соседей", "Строит дерево вопросов-ответов, склонен к переобучению"],
                        correct: [1, 3, 0, 2]
                    },
                    {
                        id: "t2_o200_1",
                        points: 200,
                        type: "fix",
                        title: "Синтез речи (TTS) с помощью pyttsx3",
                        question: "Найдите и исправьте 4 ошибки в коде.",
                        code: `
import pyttsx

engine = pyttsx.init()
engine.getProperty("rate", 150)
engine.getProperty("volume", 0.75)

voices = engine.getProperty("voices")
engine.getProperty("voice", voices[0])

phrase = input("Введите фразу:\n--> ")
engine.save_to_file(phrase, "output.wav")
                        `
                    },
                    {
                        id: "t2_o200_2",
                        points: 200,
                        type: "complete",
                        title: "Распознавание речи (STT) с помощью vosk",
                        question: "Допишите пропущенные фрагменты кода для распознавания аудиофайла",
                        code: `
from vosk import Model, KaldiRecognizer
# === 1. Допишите импорты нужных библиотек ===

MODEL_PATH = "vosk-model-small-ru-0.22"
AUDIO_FILE = "test-daniil.wav"

try:
    # === 2. Допишите открытие аудиофайла в бинарном режиме чтения ===
    with ____ as wf:
        model = Model(MODEL_PATH)
        sample_rate = wf.getframerate()
        rec = KaldiRecognizer(model, sample_rate)
        full_text = []

        while True:
            # === 3. Допишите чтение фреймов (например, по 4000) ===
            data = ____
            if len(data) == 0:
                break
            if rec.AcceptWaveform(data):
                # === 4. Допишите парсинг результата ===
                result = ____
                text = result.get("text", "").strip()
                if text:
                    full_text.append(text)

        final_result = json.loads(rec.FinalResult())
        text = final_result.get("text", "").strip()
        if text:
            full_text.append(text)

    final_text = " ".join(full_text)
    print("\nПолный распознанный текст:")
    print(final_text)

except Exception as e:
    print(f"Ошибка: {e}")
    exit(1)
                    `
                    },
                    {
                        id: "t2_o300_1",
                        points: 300,
                        type: "write",
                        title: "Синтез речи с настройками (TTS)",
                        question: "Напиши программу на Python, которая синтезирует речь из введённого текста с помощью библиотеки <code>pyttsx3</code>.<br><br>Программа должна выполнить следующие шаги:<ol><li>Импортировать библиотеку и инициализировать движок.</li><li>Установить скорость речи (<code>rate</code>) равной <code>150</code>.</li><li>Установить громкость (<code>volume</code>) равной <code>0.75</code>.</li><li>Получить список доступных голосов и выбрать первый из них.</li><li>Запросить у пользователя фразу через <code>input()</code>.</li><li>Передать введённый текст в движок для озвучивания.</li></ol>Напиши полный код в VSCode. Программа должна запускаться без ошибок и корректно обрабатывать ввод. Когда закончишь — позови преподавателя для проверки",
                    },
                ]
            },
            // web: { /* Веб-разработка — задания для Тура 2 */ }
        }
    },

    tour3: {
        name: "Тур 3: Мастер",
        topics: {
            mobile: {
                name: "Мобильная разработка",
                tasks: [
                    {
                        id: "t3_m100_1",
                        points: 100,
                        type: "multiple",
                        title: "Цвета в Kivy",
                        question: "Отметьте верные утверждения о работе с цветами в Kivy:",
                        options: [
                            "Kivy поддерживает формат RGBA для задания цветов",
                            "В формате RGBA значения варьируются от 0 до 1",
                            "Kivy поддерживает шестнадцатеричный формат HEX (#RRGGBB)",
                            "Четвёртое значение в RGBA отвечает за прозрачность (alpha)",
                            "Значение 0 в RGBA означает максимальную интенсивность цвета",
                        ],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        id: "t3_m100_2",
                        points: 100,
                        type: "matching",
                        title: "Форматы цветов",
                        question: "Соотнесите форматы записи цветов с их примерами:",
                        left: ["RGBA", "HEX", "Чёрный цвет RGBA", "Чёрный цвет HEX"],
                        right: [
                            "(0.5, 0.2, 0.8, 1.0)",
                            "#8033CC",
                            "(0, 0, 0, 1)",
                            "#000000"
                        ],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        id: "t3_m200_1",
                        points: 200,
                        type: "fix",
                        title: "Передача данных между экранами в Kivy",
                        question: "Допишите код приложения-калькулятора. Приложение должно:<ol><li>Принимать число на первом экране </li><li>При нажатии «Посчитать» переходить на второй экран </li><li>Отображать квадрат введённого числа </li><li>По кнопке «Назад» возвращаться на первый экран</li></ol>",
                        code: `
from kivy.app import App
from kivy.uix.screenmanager import Screen
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.textinput import TextInput
from kivy.uix.button import Button
from kivy.uix.label import Label


class ValidateScreen(Screen):
    def __init__(self, **kw):
        super().__init__(**kw)
        layout = BoxLayout(orientation="vertical", padding=40, spacing=20)

        self.age_input = TextInput(hint_text="Возраст", multiline=False)
        self.result_label = Lable(text="", markup=True)

        btn = Button(text="Проверить")

        layout.add_widget(self.age_input)
        layout.add_widget(btn)
        layout.add_widget(self.result_label)
        self.add_widget(layout)

    def check_age(self, instance):
        try:
            age = int(self.age_input.text)
            if age:
                self.result_label.text = "Вы слишком молоды!"
            else:
                self.result_label.text = f"Возраст: {age}"
        else:
            self.result_label.text = "Введите число"


class MyApp(App):
    def build(self):
        return ValidateScreen(name="validate")


app = MyApp()
app.run()
                        `
                    },
                    {
                        id: "t3_m200_2",
                        points: 200,
                        type: "complete",
                        title: "Валидация ввода с обработкой исключений",
                        question: "Допишите код приложения для расчёта ИМТ (индекс массы тела). Приложение должно:<ol><li>Принимать вес (кг) и рост (см) от пользователя</li><li>Проверять, что введены целые положительные числа</li><li>Обрабатывать ошибки ввода без «вылета» приложения</li><li>Показывать результат или сообщение об ошибке</li></ol>",
                        code: `
from kivy.app import App
from kivy.uix.screenmanager import Screen
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.textinput import TextInput
from kivy.uix.button import Button
from kivy.uix.label import Label


def check_int(value):
    # === Допишите функцию: ===
    # 1. Попробовать преобразовать value в int
    # 2. Если успешно и число > 0 — вернуть число
    # 3. Если ошибка или число <= 0 — вернуть False
    # Подсказка: используйте try-except
    pass


class BMIScreen(Screen):
    def __init__(self, **kw):
        super().__init__(**kw)
        layout = BoxLayout(orientation="vertical", padding=30, spacing=15)

        self.weight_input =  # Допиши создание виджета TextInput
        self.height_input =  # Допиши создание виджета TextInput
        self.result_label =  # Допиши создание виджета Label

        btn = Button(text="Рассчитать", size_hint_y=None, height=40)
        btn.bind(on_press=self.calculate)

        layout.add_widget(self.weight_input)
        layout.add_widget(self.height_input)
        layout.add_widget(btn)
        layout.add_widget(self.result_label)
        self.add_widget(layout)

    def calculate(self, instance):
        weight = check_int(self.weight_input.text)

        if weight is False:
            self.result_label.text = "[color=red]Неверный вес[/color]"
            return

        height = check_int(self.height_input.text)
        if height is False:
            self.result_label.text = "[color=red]Неверный рост[/color]"
            return

        height_m = height / 100
        bmi = round(weight / (height_m**2), 1)

        if bmi < 18.5:
            cat, col = "Недостаточный вес", "blue"
        elif bmi < 25:
            cat, col = "Норма", "green"
        elif bmi < 30:
            cat, col = "Избыточный вес", "orange"
        else:
            cat, col = "Ожирение", "red"

        self.result_label.text = f"Ваш ИМТ: {bmi} — [{col}]{cat}[/color]"


class MyApp(App):
    def build(self):
        return BMIScreen()


app = MyApp()
app.run()
                        `
                    },
                    {
                        id: "t3_m300_1",
                        points: 300,
                        type: "write",
                        title: "Форма с валидацией",
                        question: "Напиши код приложения, которое:<ol><li>Запрашивает имя и возраст пользователя</li><li>Проверяет, что возраст — целое положительное число</li><li>Показывает приветствие или сообщение об ошибке</li></ol>",
                    }
                ]
            },
            data: {
                name: "Анализ данных",
                tasks: [
                    {
                        id: "t3_d100_1",
                        points: 100,
                        type: "multiple",
                        title: "Методы информации о DataFrame",
                        question: "Отметьте верные утверждения о методах info(), head(), describe()",
                        options: [
                            "Метод info() показывает количество непустых значений и типы данных в столбцах",
                            "Метод head(n) возвращает последние n строк DataFrame",
                            "Метод describe() вычисляет статистические показатели только для числовых столбцов",
                            "Метод tail() без параметров возвращает первые 5 строк по умолчанию"
                        ],
                        correct: [0, 2]
                    },
                    {
                        id: "t3_d100_2",
                        points: 100,
                        type: "matching",
                        title: "Методы очистки данных",
                        question: "Соотнесите методы Pandas с их назначением при очистке данных",
                        left: ["fillna()", "dropna()", "apply()", "replace()"],
                        right: [
                            "Заменяет пустые значения на указанное значение",
                            "Удаляет строки, содержащие пустые значения",
                            "Применяет функцию к каждому элементу столбца для преобразования данных",
                            "Заменяет указанные подстроки в текстовых данных"
                        ],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        id: "t3_d200_1",
                        points: 200,
                        type: "fix",
                        title: "Группировка по двум признакам: статистика отзывов",
                        question: "Исправьте код для группировки по типу и целевой аудитории с расчётом статистики отзывов",
                        code: `
import pandas as pd

df = pd.read_csv("GoogleApps.csv")

# Группировка по двум признакам: Type и Content Rating
result = df.group(by=["Reviews", "Content Rating"])["Type"].agg("min", "max", "mean")

print(result)
                        `
                    },
                    {
                        id: "t3_d200_2",
                        points: 200,
                        type: "complete",
                        title: "Фильтрация: отбор платных приложений с высоким рейтингом",
                        question: "Допишите код для фильтрации приложений: цена > 0 и рейтинг >= 4.5",
                        code: `
import pandas as pd

df = pd.read_csv("GoogleApps.csv")

# Отфильтровать: платные приложения с рейтингом не ниже 4.5
filtered = df[(df["____"] > 0) & (df["____"] >= ____)]

print(f"Найдено приложений: {len(filtered)}")
print(filtered[["App", "Price", "Rating"]].head())
                        `
                    },
                    {
                        id: "t3_d300_1",
                        points: 300,
                        type: "write",
                        title: "Очистка данных: преобразование размеров в МБ",
                        question: "Напиши код для очистки столбца 'Size' и перевода всех значений в Мегабайты (float):<ul><li>Загрузи датасет <code>'GooglePlayStore_wild.csv'</code>;</li><li>Создай функцию <code>clean_size(size)</code>, которая:<ul><li>если строка оканчивается на <code>'M'</code> — возвращает <code>float(size[:-1])</code>;</li><li>если оканчивается на <code>'k'</code> — возвращает <code>float(size[:-1]) / 1024</code>;</li><li>в остальных случаях возвращает <code>-1</code>;</li></ul></li><li>Примени функцию к столбцу <code>'Size'</code> с помощью <code>apply()</code>;</li><li>Выведи максимальный размер приложения в МБ для проверки корректности очистки.</li></ul><b>Ожидаемый вывод:</b> числовое значение > 0 (например, 100.0)",
                    },
                ]
            },
            ml: {
                name: "Машинное обучение",
                tasks: [
                    {
                        id: "t3_o100_1",
                        points: 100,
                        type: "multiple",
                        title: "Оценка моделей и метрики",
                        question: "Отметьте верные утверждения об оценке качества моделей и метриках:",
                        options: [
                            "Функция accuracy_score вычисляет долю правильных предсказаний модели",
                            "Матрица ошибок (confusion_matrix) помогает увидеть, какие классы модель путает чаще всего",
                            "Метод fit() в sklearn отвечает за предсказание значений на тестовой выборке",
                            "Переобучение возникает, когда модель запоминает шум вместо общих закономерностей"
                        ],
                        correct: [0, 1, 3]
                    },
                    {
                        id: "t3_o100_2",
                        points: 100,
                        type: "matching",
                        title: "Термины машинного обучения",
                        question: "Соотнесите термины машинного обучения с их определениями:",
                        left: ["Target variable (y)", "Features (X)", "Overfitting", "StandardScaler"],
                        right: ["Преобразование данных к единому масштабу", "Переменная, которую необходимо предсказать", "Ситуация, когда модель плохо обобщает новые данные", "Признаки объекта для построения прогноза"],
                        correct: [1, 3, 2, 0]
                    },
                    {
                        id: "t3_o200_1",
                        points: 200,
                        type: "fix",
                        title: "Обработка видео и каскады",
                        question: "Исправьте код.",
                        code: `
import cv2


def main():
    video_path = input("путь к видео:\n--> ")
    video = cv2.VideoCapture(video_path)

    if not video.isOpened():
        return print("Ошибка")

    cascade = cv2.CascadeClassifier("haarcascade_fullbody.xml")
    fourcc = cv2.VideoWriter_fourcc(*"mp4v")
    out = cv2.VideoWriter(
        "output.mp4",
        fourcc,
        20,
        (int(video.get("width")), int(video.get("height"))),
    )

    k = 0
    print("начало")
    while video.isOpened():
        k += 1
        ok, frame = video.read()
        if not ok:
            break

        gray = cv2.Color(frame, cv2.COLOR_RGB2GRAY)
        result = cascade.detectMultiScale(gray, minSize=20)
        for x, y, w, h in result:
            cv2.rectangle(frame, (x, y), (x + w, y + h), (255, 50, 50), 5)
        out.write(frame)
        print("Кадр:", k)
    video.release()
    out.release()

    print("конец")


if __name__ == "__main__":
    main()
                        `
                    },
                    {
                        id: "t3_o200_2",
                        points: 200,
                        type: "complete",
                        title: "Обработка фото и каскады",
                        question: "Допиши программу для поиска человека на фотографии.",
                        code: `
import cv2
import matplotlib.pyplot as plt

IMG_PATH = "photo1.png"

# === Допиши загрузку изображения ===
img = ____

# === Сделай изображение чёрно-белыс ===
gray = cv2.____(img, cv2.COLOR_BGR2GRAY)
cascade_path = "haarcascade_fullbody.xml"
cascade = cv2.CascadeClassifier(cascade_path)

# === Допиши поиск объектов на изображении ===
objects = ____

for x, y, w, h in objects:
    cv2.rectangle(img, (x, y), (x + w, y + h), (0, 0, 255), 2)

img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

plt.figure(figsize=(10, 8))
plt.imshow(img_rgb)
plt.axis("off")
plt.title(f"Найдено объектов: {len(objects)}")
plt.tight_layout()
plt.show()
                    `
                    },
                    {
                        id: "t3_o300_1",
                        points: 300,
                        type: "write",
                        title: "",
                        question: "",
                    },
                ]
            },
            // web: { /* Веб-разработка — задания для Тура 3 */ }
        }
    }
};

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function getIndexInArray(arr, value) {
    return arr.indexOf(value);
}

let currentTour = null;
let currentTopic = null;
let currentTask = null;
let selectedOptions = [];
let matchingPairs = { left: null, right: null };
let shuffledOptionsMap = [];
let shuffledRightMap = [];
let shuffledLeftMap = [];

function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById(`page-${pageName}`).style.display = 'block';

    if (pageName === 'tasks') {
        renderTasksTable();
    }
}

function selectTour(tourKey) {
    currentTour = tasksData[tourKey];
    document.getElementById('current-tour').textContent = currentTour.name;
    showPage('tasks');
}

function renderTasksTable() {
    const tbody = document.getElementById('tasks-tbody');
    tbody.innerHTML = '';

    if (!currentTour) return;

    Object.keys(currentTour.topics).forEach(topicKey => {
        const topic = currentTour.topics[topicKey];

        const topicRow = document.createElement('tr');
        topicRow.innerHTML = `<td colspan="4" class="topic-header">${topic.name}</td>`;
        tbody.appendChild(topicRow);

        console.log(topic);
        topic.tasks.forEach(task => {
            const row = document.createElement('tr');
            row.onclick = () => openTask(topicKey, task.id);

            const pointsClass = `points-${task.points}`;
            const typeText = getTypeText(task.type);

            row.innerHTML = `
                <td>${topic.name}</td>
                <td>
                    <div>${task.title}</div>
                    <div class="task-type">${typeText}</div>
                </td>
                <td><span class="points-badge ${pointsClass}">${task.points} баллов</span></td>
                <td>${task.type === 'multiple' ? 'Тест' : task.type === 'matching' ? 'Соответствие' : 'Код'}</td>
            `;
            tbody.appendChild(row);
        });
    });
}

function getTypeText(type) {
    const types = {
        'multiple': 'Выбор ответов',
        'matching': 'Соответствие',
        'fix': 'Исправление ошибок',
        'complete': 'Дополнение кода',
        'write': 'Написание кода'
    };
    return types[type] || type;
}

function openTask(topicKey, taskId) {
    const topic = currentTour.topics[topicKey];
    const task = topic.tasks.find(t => t.id === taskId);

    currentTask = task;
    currentTopic = topic;
    selectedOptions = [];
    matchingPairs = { left: null, right: null };
    shuffledOptionsMap = [];
    shuffledRightMap = [];
    shuffledLeftMap = [];

    const content = document.getElementById('task-content');
    let html = `
                <div class="task-header">
                    <div class="task-part">Часть ${task.points === 100 ? '1' : task.points === 200 ? '2' : '3'}</div>
                    <div class="attempt-info">Попытка: 1/2</div>
                </div>
                <div class="task-question">${task.question}</div>
            `;

    if (task.type === 'multiple') {
        const originalOptions = task.options;
        const originalCorrect = task.correct;

        const indices = originalOptions.map((_, i) => i);
        const shuffledIndices = shuffleArray(indices);

        shuffledOptionsMap = shuffledIndices;

        html += '<div class="options-list">';
        shuffledIndices.forEach((originalIndex, newIndex) => {
            html += `
                        <div class="option-item" onclick="toggleOption(${newIndex})" id="opt-${newIndex}">
                            <div class="option-checkbox"></div>
                            <span>${originalOptions[originalIndex]}</span>
                        </div>
                    `;
        });
        html += '</div>';
        html += `<button class="submit-btn" onclick="checkMultipleChoice()">Проверить</button>`;
        html += '<div id="result" class="result-message"></div>';
    }
    else if (task.type === 'matching') {
        const originalLeft = task.left;
        const originalRight = task.right;
        const originalCorrect = task.correct;

        const leftIndices = originalLeft.map((_, i) => i);
        const shuffledLeftIndices = shuffleArray(leftIndices);
        shuffledLeftMap = shuffledLeftIndices;

        const rightIndices = originalRight.map((_, i) => i);
        const shuffledRightIndices = shuffleArray(rightIndices);
        shuffledRightMap = shuffledRightIndices;

        const rightReverseMap = {};
        shuffledRightIndices.forEach((origIdx, newIdx) => {
            rightReverseMap[origIdx] = newIdx;
        });

        const newCorrect = {};
        shuffledLeftIndices.forEach((leftOrigIdx, newLeftIdx) => {
            const rightOrigIdx = originalCorrect[leftOrigIdx];
            newCorrect[newLeftIdx] = rightReverseMap[rightOrigIdx];
        });

        currentTask.shuffledCorrect = newCorrect;

        html += '<div class="matching-container">';
        html += '<div class="matching-column">';
        shuffledLeftIndices.forEach((originalIndex, newIndex) => {
            html += `<div class="matching-item" onclick="selectLeft(${newIndex})" id="left-${newIndex}">${originalLeft[originalIndex]}</div>`;
        });
        html += '</div><div class="matching-column">';
        shuffledRightIndices.forEach((originalIndex, newIndex) => {
            html += `<div class="matching-item" onclick="selectRight(${newIndex})" id="right-${newIndex}">${originalRight[originalIndex]}</div>`;
        });
        html += '</div></div>';
        html += `<button class="submit-btn" onclick="checkMatching()">Проверить</button>`;
        html += '<div id="result" class="result-message"></div>';
    }
    else if (task.type === 'fix' || task.type === 'complete' || task.type === 'write') {
        if (task.code) {
            html += `<div class="code-editor"><pre>${task.code}</pre></div>`;
        }
        html += '<div style="margin-top: 20px; padding: 20px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid #667eea;">';
        html += '<p style="color: #667eea; font-weight: 600; margin-bottom: 10px;">💻 Задание для выполнения в VSCode</p>';
        html += '<p style="color: #666; line-height: 1.6;">Откройте Visual Studio Code, создайте новый файл и выполните задание. Когда закончите — позовите преподавателя для проверки.</p>';
        html += '</div>';
    }

    content.innerHTML = html;
    showPage('task');
}

function toggleOption(index) {
    const opt = document.getElementById(`opt-${index}`);
    if (selectedOptions.includes(index)) {
        selectedOptions = selectedOptions.filter(i => i !== index);
        opt.classList.remove('selected');
    } else {
        selectedOptions.push(index);
        opt.classList.add('selected');
    }
}

function checkMultipleChoice() {
    const result = document.getElementById('result');

    const selectedOriginal = selectedOptions.map(idx => shuffledOptionsMap[idx]).sort();
    const correctOriginal = currentTask.correct.sort();

    if (JSON.stringify(selectedOriginal) === JSON.stringify(correctOriginal)) {
        result.className = 'result-message success';
        result.textContent = '✅ Правильно! Вы получили ' + currentTask.points + ' баллов';
    } else {
        result.className = 'result-message error';
        result.textContent = '❌ Неправильно. Попробуйте еще раз.';
    }
}

function selectLeft(index) {
    document.querySelectorAll('.matching-column:first-child .matching-item').forEach(el => el.classList.remove('selected'));
    document.getElementById(`left-${index}`).classList.add('selected');
    matchingPairs.left = index;
    checkMatch();
}

function selectRight(index) {
    document.querySelectorAll('.matching-column:last-child .matching-item').forEach(el => el.classList.remove('selected'));
    document.getElementById(`right-${index}`).classList.add('selected');
    matchingPairs.right = index;
    checkMatch();
}

function checkMatch() {
    if (matchingPairs.left !== null && matchingPairs.right !== null) {
        const leftEl = document.getElementById(`left-${matchingPairs.left}`);
        const rightEl = document.getElementById(`right-${matchingPairs.right}`);

        if (currentTask.shuffledCorrect[matchingPairs.left] === matchingPairs.right) {
            leftEl.classList.remove('selected');
            rightEl.classList.remove('selected');
            leftEl.classList.add('matched');
            rightEl.classList.add('matched');
        }

        matchingPairs = { left: null, right: null };
        checkAllMatched();
    }
}

function checkAllMatched() {
    const matched = document.querySelectorAll('.matched').length;
    if (matched === currentTask.left.length * 2) {
        const result = document.getElementById('result');
        result.className = 'result-message success';
        result.textContent = '✅ Все пары найдены правильно! Вы получили ' + currentTask.points + ' баллов';
    }
}

function checkMatching() {
    const matched = document.querySelectorAll('.matched').length;
    if (matched < currentTask.left.length * 2) {
        const result = document.getElementById('result');
        result.className = 'result-message error';
        result.textContent = '❌ Не все пары найдены. Продолжайте сопоставление.';
    }
}

function submitCode() {
    const result = document.getElementById('result');
    result.className = 'result-message success';
    result.textContent = '✅ Код отправлен на проверку преподавателю. Вы получите баллы после проверки.';
}

showPage('tours');
