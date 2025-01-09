class Student:
    def __init__(self, name, age, grades):
        self.name = name
        self.age = age
        self.grades = grades

    def display_details(self):
        return f"Name: {self.name}, Age: {self.age}, Grades: {self.grades}"

    def calculate_average(self):
        return sum(self.grades) / len(self.grades) if self.grades else 0

# Example Usage
student = Student("shaun", 20, [85, 90, 78])
print(student.display_details())
print(f"Average Grade: {student.calculate_average():.2f}")
