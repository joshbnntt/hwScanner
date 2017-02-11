export default {
  functional: true,
  props: [
    'items',
    'elementClass',
    'tableClass',
    'itemClass',
    'isDisabled'
  ],
  render (h, {props}) {
    let { items, elementClass, tableClass, itemClass, isDisabled } = props

    return (
      <div class={elementClass}>
        <h3></h3>
        <table class={tableClass}>
          <tr>
            <th>HW</th>
            <th>Lot</th>
            <th>Other</th>
          </tr>
          { items ? items.map(item => {
            return (
                <tr>
                    <td><input type="text" value={item.HW} class={itemClass} disabled={isDisabled} /></td>
                    <td><input type="text" value={item.LT} class={itemClass} disabled={isDisabled} /></td>
                    <td><input type="text" value={item.RF} class={itemClass} disabled={isDisabled} /></td>
                </tr>
            )
          }) : null}
        </table>
      </div>
    )
  }

}
