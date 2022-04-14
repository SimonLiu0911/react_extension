# react extension

## setState

    對象式：
        setState(stateChange, [callback])
            1) stateChange 為狀態改變對象(該隊想可以體現出狀態的改變)
            2) callback 是可選的回調函數，它在狀態更新完畢，介面也更新後(render被調用)才被調用
    函數式：
        setState(updater, [callback])
            1) updater為返回stateChange對象的函數
            2) updater可以接收到state和props
            3) callback 是可選的回調函數，它在狀態更新完畢，介面也更新後(render被調用)才被調用
    總結：
        1. 對象式的setState是函數式的setState的簡寫(語法糖)
        2. 使用原則：
            1) 如果新狀態不依賴於原狀態 => 對象式
            2) 如果新狀態依賴於原狀態 => 函數式
            3) 如果需要在setState()執行後獲取最新的狀態數據，要在第二個callback函數中讀取

## Hook

### React Hook/Hooks 是什麼

    1. Hook是React 16.8.0版本增加的新特性/語法
    2. 可以讓你在函數組件中使用state以及其他的React特性

### 三個常用的 Hook

    1. State Hook: React.useState()
    2. Effect Hook: React.yseEffect()
    3. Ref Hook: React.useRef()

#### State Hook

    1. State Hook 函數組件也可以有 state 狀態，並進行狀態數據的讀寫操作
    2. 語法：const [xxx, setXXX] = React.useState(initValue)
    3. useState()說明
        1) 參數：第一次初始化指定的值在內部緩存
        2) 返回值：包含2個元素的數組，第1個為內部當前狀態值，第2個為更新狀態值的函數
    setXxx()兩種寫法
        setXxx(newValue)：參數為非函數值，直接指定新的狀態值，內部用其覆蓋原本的狀態值
        setXxx(value => newValue)：參數為函數，接收原本的狀態值，返回新的狀態值，內部用其覆蓋原本的狀態值

#### Effect Hook

    1. Effect Hook可以讓你在函數組件中執行副作用操作(用於模擬組件中生命週期鉤子)
    2. React中的副作用操作：
        發AJAX請求數據獲取
        設置訂閱/啟動定時器
        手動更改真實DOM
    3. 語法和說明：
        useEffect(() => {
            // 在此可以執行任何帶副作用操作
            return () => {
                // 在此做一些收尾工作，比如清除定時器/取消訂閱
            }
        }, [stateValue]) // 如果指定的是[]，回調函數只會在第一次render()後執行
    4. 可以把 useEffect Hook 看作如下三個函數的組合：
        componentDidMount()
        componentDidUpdate()
        componentWillUnmount()

#### Ref Hook

    1. Ref Hook可以在函數組件中存儲/查找組件內的標籤或任意其他數據
    2. 語法：const refConteiner = React.useRef()
    3. 作用：保存標籤對象，功能與React.createRef()一樣

#### Fragment

    <Fragment></Fragment>在經過編譯後會被去掉，如同<></>

#### Context

    一種組件間通信方式，常用於“祖組件”與“後代組件”間通信

### 組件優化

#### Component 的 2 個問題

    1. 只要執行setState()即使不改變狀態數據，組件也會重新render()
    2. 只當前組件重新render()，就會重新render子組件 ==> 效率低
    原因：Component中的shouldComponentUpdate()總是回傳true
    效率高做法：
        只有當組件的state或props數據發生改變時才會重新render

#### render props

    如何向組件內部動態傳入帶內容的結構(標籤)?
    Vue:
        使用slot技術，也就是通過組件標籤體傳入結構 <A><B /><A />
    React:
        1. 使用children props: 通過組件標籤體傳入結構
            <A>
                <B />
            </A>
            {this.props.children}
            問題：如果B組件需要A組件內的數據 => 做不到
        2. 使用render props: 通過組件標籤屬性傳入結構，一般用render函數屬性
            <A render={(data) => <C data={data}></C>}></A>
            A組件: {this.props.render(內部state數據)}
            C組件: 讀取A組件傳入的數據顯示 {this.props.data}
