export type CssUnit =
  // Length
  | "%"
  | "ch"
  | "cm"
  | "em"
  | "ex"
  | "in"
  | "mm"
  | "pc"
  | "pt"
  | "px"
  | "rem"
  | "vh"
  | "vmax"
  | "vmin"
  | "vw"
  //Angle
  | "deg"
  | "grad"
  | "rad"
  | "turn";

type CssVariableOptions<TValue> =
  | { value: TValue | CssVariable<TValue>; unit: CssUnit }
  | { value: TValue | CssVariable<TValue> };
type CssVariableValue = string | number;

/*#__PURE__*/
export class CssVariable<TValue = CssVariableValue> extends String {
  private readonly unit: CssUnit | "";
  /** Name e.g. `--baseSize` */
  readonly name: string;

  /** 
   * Creates a new Css Variable with a unique autogenerated name 
   * 
   * E.g. `var(--1isaui4-0)`
   */
  constructor();
  /** 
   * Creates a new Css Variable with a custom defined name 
   * 
   * E.g. `var(--baseSize)`
   */
  constructor(uniqueName: string);
  /** 
   * Creates a new Css Variable with a unique autogenerated name
   * and a fallback value
   * 
   * E.g. `var(--1isaui4-0, 12px)`
   */
  constructor(options: CssVariableOptions<TValue>);
  /** 
   * Creates a new Css Variable with a unique autogenerated name
   * and a fallback value
   * 
   * E.g. `var(--baseSize, 12px)`
   */
  constructor(uniqueName: string, options: CssVariableOptions<TValue>);
  /*#__PURE__*/
  constructor(
    arg1?: string | CssVariableOptions<TValue>,
    arg2?: CssVariableOptions<TValue>
  ) {
    const args = [arg2, arg1];
    const optionArg = args.find(
      (arg): arg is CssVariableOptions<TValue> => typeof arg === "object"
    );
    const name =
      "--" +
      (args.find((arg): arg is string => typeof arg === "string") ||
        // Fallback if babel plugin is missing
        Math.round(Math.random() * 10000).toString(16));
    const unit =
      ((optionArg || {}) as { unit: CssUnit | undefined }).unit || "";
    super(`var(${name}${optionArg ? `, ${optionArg.value + unit}` : ""})`);
    this.name = name;
    this.unit = unit;
  }
  /** Returns the variable name e.g. `--baseSize` */
  getName() {
    return this.name;
  }
  /** Create a CssObject e.g. `{ "--baseSize": '12px' }` */
  createStyle(newValue: TValue | CssVariable<TValue>, unit?: CssUnit) {
    return { [this.name]: newValue + (unit || this.unit) };
  }
  /** Create a CssString e.g. `--baseSize:12px;` */
  createCss(newValue: TValue | CssVariable<TValue>, unit?: CssUnit) {
    return `${this.name}:${newValue + (unit || this.unit)};`;
  }
  /** Returns the variable value e.g. `var(--baseSize, 12px)` */
  get val () {
    return String(this);
  }
}

/**
 * A theme structure groups multiple CssVariable instances 
 * in a nested object structure e.g.:
 * 
 * ```ts
 * const theme = { 
 *   colors: {
 *     primary: new CssVariable(),
 *     secondary: new CssVariable()
 *   },
 *   spacings: {
 *     small: new CssVariable(),
 *     large: new CssVariable()
 *   }
 * }
 * ```
 */
type ThemeStructure = { [key: string]: CssVariable | ThemeStructure };
type TCssVariableValue<T> = T extends CssVariable<infer U> ? U : T
/**
 * The ThemeValues type is a helper to map a ThemeStructure to a value type
 * to guarantee that the structure and values in serializeThemeValues match 
 */
type ThemeValues<TThemeStructure extends ThemeStructure> = {
  [Property in keyof TThemeStructure]: TThemeStructure[Property] extends CssVariable
    ? TCssVariableValue<TThemeStructure[Property]> | CssVariable<TCssVariableValue<TThemeStructure[Property]>>
    : TThemeStructure[Property] extends ThemeStructure
    ? ThemeValues<TThemeStructure[Property]>
    : never;
};

/**
 * Generate Css for a Theme
 * 
 * @example
 * ```js
 * const theme = {
 *   colors: {
 *    primary: new CssVariable(),
 *    secondary: new CssVariable(),
 *  }
 * }
 * 
 * const brightThemeCss = serializeThemeValues(theme, {
 *   colors: {
 *    primary: "#6290C3",
 *    secondary: "#C2E7DA",
 *  }
 * })
 * ```
 */
export const serializeThemeValues = <TTheme extends ThemeStructure>(
  cssVariables: TTheme,
  cssVariableValues: ThemeValues<TTheme>
): string =>
  Object.keys(cssVariables)
    .map((key) =>
      typeof cssVariableValues[key] === "string"
      ? (cssVariables[key] as CssVariable).createCss(cssVariableValues[key] as string)
        : serializeThemeValues(
            cssVariables[key] as ThemeStructure,
            cssVariableValues[key] as ThemeValues<ThemeStructure>
          )
    )
    .join("");
