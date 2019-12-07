class MySingletonType {
  private static instance: MySingletonType;
  private static singletonName: string;

  private constructor(private theName: string) { }

  static getInstance(): MySingletonType {
    if(!MySingletonType.instance)
      MySingletonType.instance = new MySingletonType(
        MySingletonType.singletonName
      );

    return MySingletonType.instance;
  }

  public static setSingletonName(name: string): void {
    MySingletonType.singletonName = name;
  }

  public showName(): void {
    console.log(this.theName);
  }
}

MySingletonType.setSingletonName('The name');
const singletonInstance: MySingletonType = MySingletonType.getInstance();
singletonInstance.showName();

/**
 * attemp to create a new instance will be unsuccessfull as the construtor is 
 * private. See the error
 */
const anotherInstance: MySingletonType = new MySingletonType();
